const { getDockerImageContext } = require('../utils/getDockerImageContext');
const chalk = require('chalk');

function handleLernaError(error, answers) {
  console.error(error.message);
}

module.exports = packages => ({
  description: 'Add route to base app',
  prompts: [
    {
      message: 'How we name route?',
      name: 'routeName',
      default: answers => answers.moduleName,
      type: 'input',
    },
    {
      message: 'What module you want attach?\n' + chalk.blue('[Space] for choice, [Enter] for confirm') + '\n',
      name: 'targetPackage',
      type: 'list',
      choices: packages,
    },
  ],
  actions: answers => {
    return [
      {
        type: 'exec',
        command: ({ targetPackage }) => getDockerImageContext('k2-dev')(
          `lerna add @k2-packages/${targetPackage} --scope=@k2-dev/base`,
        ),
        abortOnFail: false,
        onError: handleLernaError,
      },
      {
        type: 'modify',
        path: './k2-dev/base/src/index.tsx',
        pattern: /\/\* !not-delete! cli:import \*\//,
        template: (
          'import {{ pascalCase targetPackage }} from \'@k2-packages/{{targetPackage}}\''
          + '\n/* !not-delete! cli:import */'
        ),
      },
      {
        type: 'modify',
        path: './k2-dev/base/src/index.tsx',
        pattern: /\/\* !not-delete! cli:link \*\//,
        template: [
          `{ to: '/{{routeName}}', label: '{{routeName}}' },`,
          '/* !not-delete! cli:link */',
        ].join('\n            '),
      },
      {
        type: 'modify',
        path: './k2-dev/base/src/index.tsx',
        pattern: /\{\/\* !not-delete! cli:route \*\/\}/,
        template: [
          '<Route path="/{{routeName}}">',
          '  <{{ pascalCase targetPackage }} />',
          '</Route>',
          '{/* !not-delete! cli:route */}',
        ].join('\n          '),
      }
    ];
  }
});
