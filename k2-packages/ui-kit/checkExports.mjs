import fs from 'fs';
import util from 'util';

const fsReadFile = util.promisify(fs.readFile);
const fsReadDir = util.promisify(fs.readdir);
const fsStat = util.promisify(fs.stat);

async function checkExports(rootPath = './src') {
  const indexFile = fsReadFile(`${rootPath}/index.ts`, { encoding: 'utf-8' });
  const files = await fsReadDir(rootPath);

  /* Find all components */
  const stats = {};
  await Promise.all(
    files.map(async (name) => {
      stats[name] = await fsStat(`${rootPath}/${name}`);
    }),
  );
  const components = files.filter(
    (fileName) => fileName[0].toUpperCase() === fileName[0] && stats[fileName].isDirectory(),
  );

  /* Check index.ts file */
  const lines = await indexFile;
  const imports = lines.match(/from\s['"].*['"]/gm).map((l) => l.slice(8, -1));
  const missingImports = components.reduce((acc, component) => {
    if (!imports.includes(component)) acc.push(component);
    return acc;
  }, []);

  /* Report */
  if (missingImports.length > 0) {
    console.error(
      `\nYou forget export next components from index.ts file: \n - ${missingImports
        .map((e) => `${rootPath}/${e}`)
        .join('\n - ')}\n`,
    );
    throw Error('Missing exports');
  }
}

checkExports();
