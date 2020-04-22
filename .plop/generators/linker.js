/* eslint-disable no-console */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

function handleLernaError(error, answers) {
  console.error(error.message);
}

const PEERS = [
  'react',
  'react-dom',
  'react-redux'
];

const IfNotLast = string => `{{#if @last}}{{else}}${string}{{/if}}`
const template = `
{
  "project": "{{project}}",
  "packages": [
    {{#if withPeers}}
    ${PEERS.map(p => `"${p}"`).join(',\n    ') + ','}
    {{/if}}
    {{#each packages}}
    "@k2-packages/{{this}}"${IfNotLast(',')}
    {{/each}}
  ]
}
`


module.exports = packages => ({
  description: 'Attach module from @k2-packages to another project',
  prompts: [
    {
      message: 'What modules you want to link?',
      name: 'packages',
      type: 'checkbox-autocomplete',
      highlight: true,
      searchable: true,
      source: async (answers, input) => packages.filter(package => package.includes(input || '')),
      validate: choice => choice.length > 0,
    },
    {
      message: 'Where located project (where module will be use)?',
      rootPath: '../',
      name: 'project',
      type: 'fuzzypath',
      depthLimit: 0,
      excludePath: nodePath => nodePath.startsWith('node_modules') || nodePath.startsWith('.git') || nodePath.startsWith('.plop') ,
      itemType: 'directory',
    },
    {
      when: async ({ project }) => {
        const { stdout, stderr } = await exec(`cd ${project} && find -L $(find node_modules -type l) -type d -prune`);
        const peersPaths = PEERS.map(p => 'node_modules/' + p);
        const currentlyLinked = stdout.split('\n');
        const isPeerMissing = peersPaths.some(peer => !currentlyLinked.includes(peer));
        return isPeerMissing;
      },
      message: `This project missing required peers (${PEERS.join(', ')}) \nAdd it?`,
      name: 'withPeers',
      type: 'confirm',
    }
  ],
  actions: answers => {
    const timestamp = Date.now();
    const actions = [
      {
        type: 'add',
        path: `./.plop/links/${timestamp}.json`,
        template: template,
        verbose: true,
        abortOnFail: true
      },
      {
        type: 'link',
        linkFile: `./.plop/links/${timestamp}.json`,
        abortOnFail: false,
        onError: handleLernaError,
      },
    ];
    return actions;
  },
})
