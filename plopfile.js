/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const ls = require('fs').readdirSync;
const modifyJson = require('./.plop/actions/modifyJson');
const exec = require('./.plop/actions/exec');
const link = require('./.plop/actions/link');
const getModuleGenerator = require('./.plop/generators/module');
const getAddDependencyToPackageGenerator = require('./.plop/generators/dependency');
const routeGenerator = require('./.plop/generators/route');
const referencesGenerator = require('./.plop/generators/references-generator');
const linker = require('./.plop/generators/linker');

module.exports = plop => {
  plop.setPrompt('checkbox-autocomplete', require('inquirer-checkbox-plus-prompt'));
  plop.setPrompt('fuzzypath', require('inquirer-fuzzy-path'));
  plop.setHelper('curly', text => `{${text}}`);
  plop.setActionType('modifyJson', modifyJson);
  plop.setActionType('exec', exec);
  plop.setActionType('link', link);


  const exclude = ['coverage', 'tsconfig.json'];
  const packages = ls('./k2-packages/').filter(fileName => !exclude.includes(fileName));

  plop.setGenerator('new', getModuleGenerator(packages));
  plop.setGenerator('add', getAddDependencyToPackageGenerator(packages));
  plop.setGenerator('route', routeGenerator(packages));
  plop.setGenerator('ref', referencesGenerator());
  plop.setGenerator('link', linker(packages));
};
