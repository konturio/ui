import { copyFile, readdir } from 'fs/promises';
import { resolve } from 'path';

const CONFIG = {
  outputDir: 'tslib',
  srcDir: 'src',
};

async function* getFiles(dir) {
  const directories = await readdir(dir, { withFileTypes: true });
  for (const dirent of directories) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

async function getCssFiles(dir) {
  const cssFiles = [];
  for await (const file of getFiles(CONFIG.srcDir)) {
    if (file.slice(-4) === '.css') cssFiles.push(file);
  }
  return cssFiles;
}

(async () => {
  const cssFiles = await getCssFiles(CONFIG.srcDir);
  cssFiles.forEach((cssFile) => {
    copyFile(cssFile, cssFile.replace(CONFIG.srcDir, CONFIG.outputDir));
  });
})();
