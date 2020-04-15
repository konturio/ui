const fileReader = require('../utils/io');
const ls = require('fs').readdirSync;
const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os = require('os');

const printList = arr => arr.map(i => ' - ' + i).join('\n');

async function link(answers, { linkFile, abortOnFail = true, onError }, plop) {
  const file = fileReader(linkFile);
  const json = await file.read();
  const registered = ls('/home/cherrytea/.config/yarn/link');
  ls(os.homedir() + '/.config/yarn/link/@k2-packages')
    .forEach(k2 => registered.push('@k2-packages/' + k2));

  json.packages.push('react');
  json.packages.push('react-dom');

  const [ already, notYet ] = json.packages.reduce((acc, package) => {
    registered.includes(package)
      ? acc[0].push(package)
      : acc[1].push(package)
    return acc;
  }, [[],[]]);

  try {
    await notYet.map(async (package) => {
      const { stdout, stderr } = await exec(`cd ./${package.replace('@k2', 'k2')} && yarn link`);
      console.log('package', stdout)
      if (stderr) {
        throw Error(stderr);
      }
    });
  } catch (error) {
    onError(error);
  }

  try {
    const { stdout, stderr } = await exec([
      `cd ${json.project}`,
      ...json.packages.map(pack => `yarn link ${pack}`)
    ].join('&&'));
    
    console.log('package', stdout)
    if (stderr) {
      throw Error(stderr);
    }
  } catch (error) {
    onError(error);
  }

  return [
    '',
    `\n${chalk.blue('Registered:')}`,
    printList(notYet),
    `\n${chalk.blue('Ignored (already was registered):')}`,
    printList(already),
    `\n${chalk.blue(`Linked to ${json.project}:`)}`,
    printList(json.packages),
    ''
  ].join('\n');
}

module.exports = link;