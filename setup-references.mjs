import { constants } from 'fs';
import { writeFile, access } from 'fs/promises';
import util from 'util';
import childProcess from 'child_process';

const exec = util.promisify(childProcess.exec);

const CONFIG = {
  packagesFolder: './packages',
  npmNamespace: '@kontur-ui',
};

async function getTopology() {
  const { stdout, stderr } = await exec('lerna ls --toposort');
  if (stderr) {
    console.log(stderr);
  }
  const topology = stdout.trim().split('\n');
  return topology;
}

async function takeOnlyTypescriptPackages(packages) {
  const tsConfigs = await Promise.allSettled(packages.map((pkg) => access(`${pkg}/tsconfig.json`, constants.R_OK)));
  return packages.filter((_, idx) => tsConfigs[idx].status === 'fulfilled');
}

function createTsConfigWithReferences(packages) {
  return {
    files: [],
    references: packages.map((pkg) => ({ path: pkg.replace(`${CONFIG.packagesFolder}/`, '') })),
    compilerOptions: {
      composite: true,
    },
  };
}

(async () => {
  const topology = await getTopology();
  const packages = topology.map((pkg) => pkg.replace(CONFIG.npmNamespace, CONFIG.packagesFolder));
  const tsPackages = await takeOnlyTypescriptPackages(packages);
  const tsConfig = createTsConfigWithReferences(tsPackages);
  const json = JSON.stringify(tsConfig, null, 2);
  writeFile(`${CONFIG.packagesFolder}/tsconfig.json`, json);
})();
