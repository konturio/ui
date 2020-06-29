const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * Globally register packages in system for creating links in future
 */
async function registerLinks(notRegisteredPackages) {
  return await notRegisteredPackages.map(async (pkg)=> {
    const { stdout, stderr } = await exec(`cd ./node_modules/${pkg.replace('@k2', 'k2')} && yarn link`);
    console.log('package', stdout)
    if (stderr) {
      console.log(stderr)
      throw Error(stderr);
    }
  });
}

module.exports.registerLinks = registerLinks;