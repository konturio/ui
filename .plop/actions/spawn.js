const spawn = require('child_process').spawn;

function promisify(proc) {
  return new Promise((res, rej) => {
    proc.on('exit', (code, signal) => {
    if (code === 0) {
      res(signal)
    } else {
      rej(code)
    }
    });
  })
}

/**
 * Action for spawn custom processes
 * @param {object} answers 
 * @param {object} options
 * @param {object} options.commands - { [command]: ['arg1', 'arg2'] } or function that return this object
 * @param {boolean} options.abortOnFail
 * @param {function} options.onError
 * @param {object} plop 
 */
async function spawnAction(answers, { commands, abortOnFail = true, onError }, plop) {
  commands = typeof commands === 'function' ? commands(answers) : commands;
  for (const command of Object.keys(commands)) {
    const args = commands[command];
    const proc = spawn(command, args, {
      cwd: process.cwd(),
      stdio: 'inherit'
    });
    try {
      await promisify(proc)
    } catch(error) {
      if (onError) onError('Code:', error);
      if (abortOnFail) throw new Error(`Aborted with command fail: ${command} ${args.join(' ')}`);
    }
  }
}

module.exports = spawnAction