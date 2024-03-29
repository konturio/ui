const { pascalCase } = require('@figma-export/utils');

// Link to our figma file: https://www.figma.com/file/C2TlBs45hTL0U5pqZl2n9d/Kontur-Design-System?node-id=1199%3A9800
// Each Figma file has a unique URL containing its ID.
// The file ID is the string of random alphanumeric characters found in the section of the URL after figma.com/file/.
const FIGMA_FILE_ID = 'C2TlBs45hTL0U5pqZl2n9d';

// in figma we have component name like 24px/disasters
// 24px - dirname, disasters - basename
// in case of naming icon 24px/subdirectory/disasters, it will be 24px/subdirectory - dirname, disasters- basename
const getComponentName = ({ basename, dirname }) =>
  `${pascalCase(basename)}${getComponentNamePostfixByIconDirName(dirname)}`;

getComponentNamePostfixByIconDirName = (dirname) => {
  if (dirname.includes('24px')) return 24;
  if (dirname.includes('16px')) return 16;
  return '';
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
            plugins: [
              { name: 'removeXMLNS' },
              {
                name: 'cleanupIDs',
                params: {
                  minify: false,
                },
              },
              { name: 'collapseGroups' },
            ],
          }),
        ],
        outputters: [
          require('@figma-export/output-components-as-svgr')({
            output: './src/figma-icons',
            getDirname: (options) => `./`, // to have all icons in one folder
            getComponentName,
            getFileExtension: () => '.tsx',
            getSvgrConfig: (options) => ({
              typescript: true,
              memo: true,
              jsxRuntime: 'automatic',
              replaceAttrValues: {
                ['#051626']: 'currentColor',
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
