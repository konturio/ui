const chalk = require('chalk');
const { camelCase } = require('../utils/formatters');
const { getDockerImageContext } = require('../utils/getDockerImageContext');
function handleLernaError(error, answers) {
  console.error(error.message);
}

const WORKSPACE = chalk.yellow('Add to Workspace (Project root)');
const BASE_APP = chalk.yellow('Add to k2-dev (Base app)');

/* Actions */
const addPackageToAnotherPackage = {
  type: 'exec',
  command: ({ whatPackage, targetPackage }) => getDockerImageContext('k2-dev')(
    `lerna add ${whatPackage} --scope=@k2-packages/${targetPackage}`,
  ),
  abortOnFail: false,
  onError: handleLernaError,
};

const addPackageToWorkSpace = {
  type: 'exec',
  command: ({ whatPackage, targetPackage }) => getDockerImageContext('k2-dev')(
    `yarn add ${whatPackage} -D -W`,
  ),
  abortOnFail: false,
  onError: handleLernaError,
};

const addPackageToBaseApp = {
  type: 'exec',
  command: ({ whatPackage, targetPackage }) => getDockerImageContext('k2-dev')(
    `lerna add ${whatPackage} --scope=@k2-dev/base`,
  ),
  abortOnFail: false,
  onError: handleLernaError,
};

/* Dialogue */
module.exports = packages => ({
  description: 'Add dependency to package',
  prompts: [
    {
      message: 'What package we want to add as dependency?',
      name: 'whatPackage',
      type: 'input',
      validate: name => name.length > 2,
    },
    {
      message: 'Where we add it?\n' + chalk.blue('[Space] for choice, [Enter] for confirm') + '\n',
      name: 'targetPackage',
      type: 'checkbox-autocomplete',
      highlight: true,
      searchable: true,
      source: async (answers, input) => [WORKSPACE, BASE_APP, ...packages].filter(package => package.includes(input || '')),
      validate: choice => choice.length > 0,
    },
  ],
  actions: (answers) => {
    const actionMap = {
      [WORKSPACE]: addPackageToWorkSpace,
      [BASE_APP]: addPackageToBaseApp,
      _default: addPackageToAnotherPackage,
    }
    const actions = [actionMap[answers.targetPackage] || actionMap._default];
    return actions;
  },
})
