const chalk = require('chalk');
const util = require('util');
const log = console.log;

function scope(scopeName) {
  log(chalk.yellow(`[${scopeName}]:`));
}

function error(error) {
  if (error.message) {
    log(chalk.redBright.bold(error.message));
    log(error);
  } else {
    log(chalk.redBright.bold(error));
  }

}

function success(message) {
  log(chalk.green.bold(message));
}

function debug(message) {
  if (/*process.ENV.verbose*/ true) {
    if (typeof message === 'object') {
      log(util.inspect(message, {colors:true, depth: 3}))
    } else {
      log(chalk.blueBright(message));
    }
  }
;
}

function logMiddleware(printer) {
  return (entity, scopeName) => {
    if (scopeName) scope(scopeName);
    if (Array.isArray(entity)) {
      entity.forEach(printer)
    } else {
      printer(entity);
    }
  }
}


module.exports = {
  error: logMiddleware(error),
  success: logMiddleware(success),
  debug: logMiddleware(debug)
}