const fileReader = require('../../utils/io');
const chalk = require('chalk');
const { attachLinks } = require('./attachLinks');
const { registerLinks } = require('./registerLinks');
const { checkRegistration } = require('./checkRegistration');

const printList = arr => arr.map(i => ' - ' + i).join('\n');

async function link(answers, { linkFile, abortOnFail = true, onError }, plop) {
  const file = await fileReader(linkFile).read();

  const [already, notRegisteredPackages] = checkRegistration(file);
  try {
    await registerLinks(notRegisteredPackages);
  } catch (error) {
    onError(error);
  }

  try {
    await attachLinks(file);
  } catch (error) {
    onError(error);
  }

  return [
    '',
    `\n${chalk.blue('Registered:')}`,
    printList(notRegisteredPackages),
    `\n${chalk.blue('Ignored (already was registered):')}`,
    printList(already),
    `\n${chalk.blue(`Linked to ${file.project}:`)}`,
    printList(file.packages),
    ''
  ].join('\n');
}

module.exports = link;