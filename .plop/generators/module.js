const { kebabCase } = require('../utils/formatters');
const { getDockerImageContext } = require('../utils/getDockerImageContext');

module.exports = packages => ({
  description: 'Create new module',
  prompts: [
    {
      message: 'How we name module (in PascalCase)?',
      name: 'moduleName',
      type: 'input',
      filter: kebabCase,
      validate: name => name.length > 2,
    },
    {
      message: 'Add new module as dependency to other modules?',
      name: 'addDeps',
      type: 'confirm',
    },
    {
      when: ({ addDeps }) => addDeps,
      message: 'Select modules depends from it',
      name: 'depends',
      type: 'checkbox-autocomplete',
      highlight: true,
      searchable: true,
      source: async (answers, input) => packages.filter(package => package.includes(input || '')),
      choices: packages,
      validate: choice => choice.length > 0,
    },
  ],
  actions: answers => {
    const actions = [
      {
        type: 'addMany',
        verbose: true,
        abortOnFail: true,
        destination: './k2-packages/{{kebabCase moduleName}}',
        base: './templates/module',
        templateFiles: [
          './templates/module/**/*.*',
        ],
      },
      {
        type: 'modifyJson',
        location: './k2-packages/tsconfig.json',
        onEdit: (json, answers) => {
          json.references.unshift({
            path: `${kebabCase(answers.moduleName)}`,
          });
          return json;
        },
      },
    ];

    if (answers.depends && answers.depends.length > 0) {
      actions.push({
        type: 'exec',
        command: ({ depends, moduleName }) => depends.map(module => (
          getDockerImageContext('k2-dev')(
            `lerna add @k2-packages/${moduleName} --scope=@k2-packages/${module}`,
          )
        )),
        abortOnFail: false,
        onError: error => console.log('Are you run docker-compose up?', error),
      });
    }

    return actions;
  },
})
