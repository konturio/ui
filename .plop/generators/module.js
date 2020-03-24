const { pascalCase, kebabCase } = require('../utils/formatters');
const { getDockerImageContext } = require('../utils/getDockerImageContext');

function handleLernaError(error, answers) {
  console.error(error.message);
}

module.exports = packages => ({
  description: 'Create new module',
  prompts: [
    {
      message: 'How we name module (in PascalCase)?',
      name: 'moduleName',
      type: 'input',
      filter: pascalCase,
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
      {
        type: 'exec',
        command: () => ([
          'tsc -b tsconfig.json',
        ]),
        abortOnFail: false,
        onError: handleLernaError,
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
        onError: handleLernaError,
      });
    }

    return actions;
  },
})
