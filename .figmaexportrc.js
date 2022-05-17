const { pascalCase } = require('@figma-export/utils');
const { parseFileSync } = require('css-variables-parser');

// Link to our figma file: https://www.figma.com/file/C2TlBs45hTL0U5pqZl2n9d/Kontur-Design-System?node-id=1199%3A9800
// Each Figma file has a unique URL containing its ID.
// The file ID is the string of random alphanumeric characters found in the section of the URL after figma.com/file/.
const FIGMA_FILE_ID = 'C2TlBs45hTL0U5pqZl2n9d';

const variables = parseFileSync('./k2-packages/default-theme/variables.css');
const getVariable = (key) => variables[key].toUpperCase();

const getComponentName = ({ basename, dirname }) =>
  `${pascalCase(basename)}${getComponentNamePostfixByIconDirName(dirname)}`;

getComponentNamePostfixByIconDirName = (dirname) => {
  const postfixByDirname = {
    '24px': 24,
    '16px': 16,
  };

  return postfixByDirname[dirname] || '';
};

module.exports = {
  commands: [
    [
      'components',
      {
        fileId: FIGMA_FILE_ID,
        onlyFromPages: ['Icons'],
        transformers: [
          require('@figma-export/transform-svg-with-svgo')({
            plugins: [{ name: 'removeXMLNS' }],
          }),
        ],
        outputters: [
          require('@figma-export/output-components-as-svgr')({
            output: './k2-packages/default-icons/src/figma-icons',
            getDirname: (options) => `./`, // to have all icons in one folder
            getComponentName,
            getFileExtension: () => '.tsx',
            getSvgrConfig: (options) => ({
              typescript: true,
              memo: true,
              jsxRuntime: 'automatic',
              replaceAttrValues: {
                [getVariable('base-weak-up')]: 'currentColor',
                [getVariable('base-strong-down')]: 'currentColor',
                [getVariable('faint-strong')]: 'currentColor',
                [getVariable('icon-base-strong')]: 'currentColor',
              },
              // template is default, but we need to add displayName to every icon component
              // https://github.com/gregberge/svgr/blob/main/packages/babel-plugin-transform-svg-component/src/defaultTemplate.ts
              template: (variables, { tpl }) => {
                return tpl`
                  ${variables.imports};
                  ${variables.interfaces};
                  const ${variables.componentName} = (${variables.props}) => (
                    ${variables.jsx}
                  );

                  ${variables.componentName}.displayName = '${variables.componentName}';
                  
                  ${variables.exports};
                  `;
              },
            }),
            getExportTemplate: (options) => {
              const reactComponentName = getComponentName(options);
              return `export { default as ${reactComponentName} } from './${reactComponentName}';`;
            },
          }),
        ],
      },
    ],
  ],
};
