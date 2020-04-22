const util = require('util');
const exec = util.promisify(require('child_process').exec);

/* eslint-disable no-console */
function handleLernaError(error, answers) {
  console.error(error.message);
}

async function findLinkedPackages(projectDir) {
  const { stdout, stderr } = await exec(`cd ${projectDir} && find -L $(find node_modules -type l) -type d -prune`);
  return stdout.split('\n').filter(i => i !== '').map(path => path.replace('node_modules/', ''));
}

module.exports = packages => ({
  description: 'Attach module from @k2-packages to another project',
  prompts: [
    {
      message: 'Where located project (where you wand delete links)?',
      rootPath: '../',
      name: 'projectDir',
      type: 'fuzzypath',
      depthLimit: 0,
      excludePath: nodePath => nodePath.startsWith('node_modules') || nodePath.startsWith('.git') || nodePath.startsWith('.plop') ,
      itemType: 'directory',
    },
    {
      message: 'What modules you want to unlink?',
      name: 'linkedPackages',
      type: 'checkbox-autocomplete',
      highlight: true,
      searchable: true,
      source: async (answers, input) => findLinkedPackages(answers.projectDir),
      validate: choice => choice.length > 0,
    },
  ],
  actions: answers => {
    const actions = [
      {
        type: 'exec',
        command: ({ projectDir, linkedPackages }) => ([
          `cd ${projectDir}`,
          ...linkedPackages.map(pack => `yarn unlink ${pack}`)
        ].join(' && ')),
        abortOnFail: false,
        onError: handleLernaError,
      },
    ];
    return actions;
  },
})
