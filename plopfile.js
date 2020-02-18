const ls = require('fs').readdirSync;
const { camelCase } = require('./.plop/utils/formatters');
const modifyJson = require('./.plop/actions/modifyJson');

module.exports = plop => {
  plop.setActionType('modifyJson', modifyJson);
  plop.setGenerator('Create module', {
      description: 'Run all workflow to create new module',
      prompts: [
        {
          message: 'How we name it?',
          name: 'moduleName',
          type: 'input',
          filter: camelCase,
          validate: name => name.length > 2
        },
        {
          message: 'Add new module as dependency to other modules?',
          name: 'addDeps',
          type: 'confirm'
        },
        {
          when: ({ addDeps }) => addDeps,
          message: 'Add to all modules?',
          name: 'isGlobalDeps',
          type: 'confirm'
        },
        {
          when: ({ addDeps, isGlobalDeps }) => addDeps && !isGlobalDeps,
          message: 'Select modules depends from it',
          name: 'depends',
          type: 'checkbox',
          choices: ls('./k2-packages/')
        },
      ], 
      actions: [
        {
          type: 'addMany',
          verbose: true,
          abortOnFail: true,
          destination: './k2-packages/{{moduleName}}',
          base: './templates/module',
          templateFiles: [
            './templates/module/*.*'
          ]
        },
        {
          type: 'modifyJson',
          location: './tsconfig.json',
          onEdit: (json, answers) => {
            json.references.unshift({
              path: `./k2-packages/${answers.moduleName}`
            });
            return json;
          }
        },
      ] 
  });
};
