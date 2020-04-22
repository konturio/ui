const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * Replace dependencies in target project
 * with links to packages in source project
 */
async function attachLinks(linkRecords) {
  const { packages, project } = linkRecords;
  const { stdout, stderr } = await exec([
    `cd ${project}`,
    ...packages.map(pack => `yarn link ${pack.replace('./node_modules/', '')}`)
  ].join('&&'));
  
  if (stderr) {
    throw Error(stderr);
  }
}

module.exports.attachLinks = attachLinks;