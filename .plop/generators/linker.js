/* eslint-disable no-console */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

function handleLernaError(error, answers) {
  console.error(error.message);
}

const IfNotLast = string => `{{#if @last}}{{else}}${string}{{/if}}`
const template = `
{
  "project": "{{project}}",
  "packages": [
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
