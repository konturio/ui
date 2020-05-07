/* eslint-disable no-console */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = packages => ({
  description: 'Release modules',
  prompts: [
    {
      message: [
        'This command create new versions for modules with changes',
        'Are you sure?'
      ].join('\n'),
      name: 'release',
      type: 'confirm',
    },
  ],
  actions: answers => {
    const actions = [];

    if (answers.release){
      actions.push(
        {
          type: 'spawn',
          commands: ({ projectDir, linkedPackages }) => ({ lerna: ['version', '--no-push'] }),
          onError: e => console.log(e),
        },
        [
          'For pushing change call:',
          '',
          '    git add .',
          '    git commit -m \'build: modules version bump\'',
          '    git push origin --tags',
          ''
        ].join('\n')
      );
    }

    return actions;
  },
})

//  "release": "lerna version --no-push"

