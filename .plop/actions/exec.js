const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');
const warning = message => chalk.yellowBright(message);
const { getDockerImageContext } = require('../utils/getDockerImageContext');

async function execAction(answers, { command, abortOnFail = true, onError }, plop) {
  const output = command(answers);
  const commands = Array.isArray(output) ? output : [output];
  for (com of commands) {
    try {
      const { stdout, stderr } = await exec(com);
      return (
        `\nExecuted:` +
        `\n  ${commands.join('\n  ')}` +
        `\nstdout:` +
        `\n${stdout}`
      );
    } catch (error) {
      if (error.stdout.includes(com + ' - EACCES: permission denied')) {
        onError({
          message: warning(`'EACCES: permission denied' error detected, trying to fix that`)
        });
        try {
          const permissionFixCommand = getDockerImageContext('k2-dev')('chmod -R o+w .');
          const { stdout, stderr } = await exec(permissionFixCommand);
          return stdout;
        } catch (error) {
          onError(error)
        }
      }

      if (abortOnFail) {
        throw error;
      }
      onError(error)
    }
  }
}

module.exports = execAction