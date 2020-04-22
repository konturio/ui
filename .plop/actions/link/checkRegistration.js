const ls = require('fs').readdirSync;
const os = require('os');

/**
 * Find what packages already registered in system and can be used for creating links
 */
function checkRegistration(wantToRegister) {
  const registered = ls(os.homedir() + '/.config/yarn/link');
  let registeredK2 = [];
  try {
    registeredK2 = ls(os.homedir() + '/.config/yarn/link/@k2-packages').map(pack => '@k2-packages/' + pack);
  } catch(e) {

  }
  const allRegisteredPackages = [...registered, ...registeredK2];
  return wantToRegister.packages.reduce((acc, pckg) => {
    allRegisteredPackages.includes(pckg)
      ? acc[0].push(pckg)
      : acc[1].push(pckg)
    return acc;
  }, [[],[]]);
}

module.exports.checkRegistration = checkRegistration;