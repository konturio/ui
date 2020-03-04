const ls = require('fs').readdirSync;
const { camelCase } = require('./.plop/utils/formatters');
const modifyJson = require('./.plop/actions/modifyJson');
const exec = require('./.plop/actions/exec');
const { getDockerImageContext } = require('./.plop/utils/getDockerImageContext');

function handleLernaError(error, answers) {
  console.error(error.message)
}


module.exports = plop => {
  plop.setPrompt('checkbox-autocomplete', require('inquirer-checkbox-plus-prompt'));
  plop.setHelper('curly', text => `{${text}}`);
  plop.setActionType('modifyJson', modifyJson);
  plop.setActionType('exec', exec);

  const packages = ls('./k2-packages/');

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
          type: 'checkbox-autocomplete',
          highlight: true,
          searchable: true,
          source: async (answers, input) => packages.filter(package => package.includes(input || '')),
          choices: packages,
          validate: choice => choice.length > 0
        },
        {
          message: 'Add module to "base" app?',
          name: 'needRoute',
          type: 'confirm',
        },
        {
          when: ({ needRoute }) => needRoute,
          message: 'How we name route?',
          name: 'routeName',
          default: answers => answers.moduleName,
          type: 'input',
        },
      ], 
      actions: answers => {
        const actions = [
          {
            type: 'addMany',
            verbose: true,
            abortOnFail: true,
            destination: './k2-packages/{{moduleName}}',
            base: './templates/module',
            templateFiles: [
              './templates/module/**/*.*'
            ]
          },
          {
            type: 'modifyJson',
            location: './k2-packages/tsconfig.json',
            onEdit: (json, answers) => {
              json.references.unshift({
                path: `${answers.moduleName}`
              });
              return json;
            }
          },
          {
            type: 'exec',
            command: () => ([
              `tsc -b tsconfig.json`
            ]),
            abortOnFail: false,
            onError: handleLernaError
          }
        ];

        
  

        if (answers.isGlobalDeps) {
          actions.push({
            type: 'exec',
            command: ({ moduleName }) => getDockerImageContext('k2-dev')(
              `lerna add @k2-packages/${moduleName}`,
              'lerna link'
            ),
            abortOnFail: false,
            onError: handleLernaError
          });
        }

        else if (answers.depends && answers.depends.length > 0) {
          actions.push({
            type: 'exec',
            command: ({ depends, moduleName }) => depends.map(module => (
              getDockerImageContext('k2-dev')(
                `lerna add @k2-packages/${moduleName} --scope=@k2-packages/${module}`,
                'lerna link'
              )
            )),
            abortOnFail: false,
            onError: handleLernaError
          }); 
        }



        if (answers.needRoute && answers.routeName) {
          actions.push({
            type: 'exec',
            command: ({ moduleName }) => getDockerImageContext('k2-dev')(
              `lerna add @k2-packages/${moduleName} --scope=@k2-dev/base`,
              'lerna link'
            ),
            abortOnFail: false,
            onError: handleLernaError
          });

          actions.push({
            type: 'modify',
            path: './k2-dev/base/src/index.tsx',
            pattern: /\/\* !not-delete! cli:import \*\//,
            template: (
              `import {{ pascalCase moduleName }} from '@k2-packages/{{moduleName}}'` +
              `\n/* !not-delete! cli:import */`
            )
          });

          actions.push({
            type: 'modify',
            path: './k2-dev/base/src/index.tsx',
            pattern: /\{\/\* !not-delete! cli:route \*\/\}/,
            template: [
              '<Route path="/{{routeName}}">',
              '    <{{pascalCase moduleName}} />',
              '</Route>',
              '{/* !not-delete! cli:route */}'
            ].join('\n                    ')
          });

          actions.push({
            type: 'modify',
            path: './k2-dev/base/src/index.tsx',
            pattern: /\{\/\* !not-delete! cli:link \*\/\}/,
            template: [
              '<li>',
              '    <Link to="/{{routeName}}">{{ moduleName }}</Link>',
              '</li>',
              '{/* !not-delete! cli:link */}'
            ].join('\n                    ')
          });

        }

        return actions;
      }
  });
};