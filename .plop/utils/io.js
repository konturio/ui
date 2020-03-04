const promisify = require('util').promisify;
const fs = require('fs');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

function file(path) {
  const stat = {
    beforeSize: 0,
    afterSize: 0,
    get difference() {
      return this.afterSize - this.beforeSize;
    }
  };

  return {
    read: async () => {
      const file = await readFile(path, 'utf8');
      stat.beforeSize = file.length;
      return JSON.parse(file);
    },
    write: async data => {
      const string = JSON.stringify(data, null, 2);
      stat.afterSize = string.length;
      await writeFile(path, string, 'utf8');
    },
    stat
  }
}

module.exports = file;