const ls = require('fs').readdirSync;
const os = require('os');

/**
 * Find what packages already registered in system and can be used for creating links
 */
function checkRegistration(wantToRegister) {
  const registered = ls(os.homedir() + '/.config/yarn/link');
  return wantToRegister.packages.reduce((acc, pckg) => {
    registered.includes(pckg)
      ? acc[0].push(pckg)
      : acc[1].push(pckg)
    return acc;
  }, [[],[]]);
}

module.exports.checkRegistration = checkRegistration;