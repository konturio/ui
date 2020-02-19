const util = require('util');
const exec = util.promisify(require('child_process').exec);

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
      if (abortOnFail) {
        throw error;
      }
      onError(error)
    }
  }
}

module.exports = execAction