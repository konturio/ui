const { ls, formatTasks } = require('./.recli/utils/index.js');
const inquirer = require('inquirer');

const MODULE_ADD_VARIANTS = {
  modules: 'Select modules',
  all: 'To all'
}

!async function cli() {
  const answers = await inquirer
    .prompt([
      {
        message: 'How we name it?',
        name: 'moduleName',
        type: 'input'
      },
      {
        message: 'Add new module as dependency?',
        name: 'isDeps',
        type: 'confirm'
      },
      {
        when: ({ isDeps }) => isDeps,
        message: 'Where we add it?',
        name: 'addAsDepWhere',
        type: 'list',
        choices: () => Object.values(MODULE_ADD_VARIANTS)
      },
      {
        when: ({ addAsDepWhere }) => addAsDepWhere === MODULE_ADD_VARIANTS.modules,
        message: 'Where we add it?',
        name: 'addToModules',
        type: 'checkbox',
        choices: ls('./k2-packages/')
      }
    ]);

    const tasks = [
      {
        type: 'copy',
        args: ['./generators/module', './k2-packages/${moduleName}/'],
      },
      {
        type: 'inject',
        args: ['./tsconfig.json', {
          key: 'references',
          value: { path: `./k2-packages/moduleName`},
          prepend: true
        }],
      }
    ];

    console.log(formatTasks(tasks))
  
  // cliOf('Create module', module)
  //   .setAnswers(() => answers)
  //   /* Create folder and files by template */
  //   .call(async ({ moduleName }) => {
  //     await childProcess.spawn(
  //       `cp -r ./generators/module ./k2-packages/${moduleName}/`
  //     );
  //   })
  //   /* Update package.json */
  //   .call(async ({ moduleName }) => {
  //     const results = await replace({
  //       files: `./k2-packages/${moduleName}/package.json`,
  //       from: /{moduleName}/g,
  //       to: moduleName,
  //     })
  //   })
  //   /* Add new module to tsConfig */
  //   .call(async ({ moduleName }) => {
  //     const TS_CONFIG_LOC = './tsconfig.json';
  //     const tsConfig = await readJSON(TS_CONFIG_LOC);
  //     tsConfig.references.unshift({
  //       path: `./k2-packages/${moduleName}`
  //     });
  //     writeJSON(TS_CONFIG_LOC, tsConfig)
  //   })
  //   /* Add module as global dependency */
  //   .call(async ({ addAsDep }) => {
  //     console.log(addAsDep)
  //   })
  //   /* Add module as local dependency */
  //   .call(async ({ addAsDep }) => {
  //     console.log(addAsDep)
  //   })
}();

