/* eslint-disable no-console */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function generateRefs() {
  const { stdout, stderr } = await exec('lerna ls --toposort');
  const topology = stdout.trim().split('\n');
  return topology.map(packageName => ({
    path: packageName.replace('@k2-packages/', '')
  }))
}

module.exports = packages => ({
  description: 'Generate new references for k2-packages/tsconfig',
  prompts: [
    {
      message: [
        'This command rewrite "references" in k2-packages/tsconfig.json based on lerna output',
        'Are you sure?'
      ].join('\n'),
      name: 'rewrite',
      type: 'confirm',
    },
  ],
  actions: answers => {
    const actions = [];

    if (answers.rewrite) {
      actions.push({
        type: 'modifyJson',
        location: './k2-packages/tsconfig.json',
        onEdit: async (json, answers) => {
          json.references = await generateRefs();
          return json;
        },
      });
    }

    return actions;
  },
})
