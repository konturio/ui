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
  const { stdout, stderr } = await exec('lerna ls --toposort');
  if (stderr) {
    console.log(stderr);
  }
  const topology = stdout.trim().split('\n');
  return topology;
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
