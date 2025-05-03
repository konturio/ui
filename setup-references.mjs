import { constants, accessSync } from 'fs';
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
  const { stdout, stderr } = await exec('pnpm ls -r --depth -1 --json');
  if (stderr) {
    console.log(stderr);
  }
  const packages = JSON.parse(stdout);

  // Sort packages by dependencies to ensure correct build order
  const packageMap = new Map();
  packages.forEach((pkg) => {
    packageMap.set(pkg.name, pkg);
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

  return sorted;
}

const pathExists = (path) => {
  try {
    accessSync(path, constants.R_OK);
    return true;
  } catch (_) {
    return false;
  }
};

const takeOnlyTypescriptPackages = (packages) =>
  packages.filter((p) => pathExists(path.resolve(p, 'tsconfig.build.json')));

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
  const topology = await getTopology();
  const packages = topology.map((pkg) => pkg.replace(CONFIG.npmNamespace, CONFIG.packagesFolder));
  const tsPackages = takeOnlyTypescriptPackages(packages);
  const tsConfig = createTsConfigWithReferences(tsPackages);
  const json = JSON.stringify(tsConfig, null, 2);
  writeFile(`${CONFIG.packagesFolder}/tsconfig.json`, json);
})();
