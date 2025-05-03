import { constants, accessSync, existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import util from 'util';
import path from 'path';
import childProcess from 'child_process';

const exec = util.promisify(childProcess.exec);

const CONFIG = {
  packagesFolder: './packages',
  npmNamespace: '@konturio',
};

async function getTopology() {
  try {
    console.log('Getting package topology with pnpm...');
    const { stdout, stderr } = await exec('pnpm ls -r --depth -1 --json');
    if (stderr) {
      console.warn('Warning during pnpm execution:', stderr);
    }

    let packages;
    try {
      packages = JSON.parse(stdout);
      console.log(`Found ${packages.length} packages in workspace`);
    } catch (e) {
      console.error('Failed to parse pnpm output:', e);
      console.log('Raw output:', stdout);
      throw e;
    }

    // Sort packages by dependencies to ensure correct build order
    const packageMap = new Map();
    packages.forEach((pkg) => {
      packageMap.set(pkg.name, pkg);
      console.log(`Package: ${pkg.name}, Path: ${pkg.path}`);
    });

    // Sort topologically
    const sorted = [];
    const visited = new Set();

    function visit(pkgName) {
      if (visited.has(pkgName)) return;
      visited.add(pkgName);

      const pkg = packageMap.get(pkgName);
      if (!pkg) return;

      // Process dependencies first
      const deps = {
        ...(pkg.dependencies || {}),
        ...(pkg.devDependencies || {}),
      };

      Object.keys(deps).forEach((dep) => {
        if (packageMap.has(dep)) {
          visit(dep);
        }
      });

      sorted.push(pkg.name);
    }

    // Visit all packages
    packages.forEach((pkg) => visit(pkg.name));
    console.log('Sorted packages:', sorted);
    return sorted;
  } catch (error) {
    console.error('Error getting package topology:', error);
    // Fallback to a simple approach if pnpm command fails
    return ['@konturio/default-icons', '@konturio/default-theme', '@konturio/floating', '@konturio/ui-kit'];
  }
}

const pathExists = (path) => {
  try {
    accessSync(path, constants.R_OK);
    return true;
  } catch (_) {
    return false;
  }
};

const takeOnlyTypescriptPackages = (packages) => {
  const result = packages.filter((p) => {
    const configPath = path.resolve(p, 'tsconfig.build.json');
    const exists = pathExists(configPath);
    console.log(`Checking if ${configPath} exists: ${exists}`);
    return exists;
  });
  console.log('TypeScript packages:', result);
  return result;
};

function createTsConfigWithReferences(packages) {
  return {
    files: [],
    references: packages.map((pkg) => ({
      path: pkg.replace(`${CONFIG.packagesFolder}/`, '') + '/tsconfig.build.json',
    })),
    compilerOptions: {
      composite: true,
    },
  };
}

(async () => {
  try {
    console.log('Setting up TypeScript project references...');
    const topology = await getTopology();
    console.log('Converting package names to paths...');
    const packages = topology.map((pkg) => pkg.replace(CONFIG.npmNamespace, CONFIG.packagesFolder));
    console.log('Packages paths:', packages);

    const tsPackages = takeOnlyTypescriptPackages(packages);
    const tsConfig = createTsConfigWithReferences(tsPackages);
    const json = JSON.stringify(tsConfig, null, 2);

    const outputPath = `${CONFIG.packagesFolder}/tsconfig.json`;
    console.log(`Writing TypeScript config to ${outputPath}:`, json);

    // Make sure packages directory exists
    if (!existsSync(CONFIG.packagesFolder)) {
      console.log(`Creating packages directory ${CONFIG.packagesFolder}`);
      mkdirSync(CONFIG.packagesFolder, { recursive: true });
    }

    await writeFile(outputPath, json);
    console.log('TypeScript references setup complete!');
  } catch (error) {
    console.error('Failed to setup TypeScript references:', error);
    process.exit(1);
  }
})();
