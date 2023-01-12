import autoprefixer from 'autoprefixer';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNormalize from 'postcss-normalize';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
export default {
  plugins: [
    postcssCustomMedia({
      importFrom: './node_modules/@konturio/default-theme/variables.css'
    }),
    postcssImport,
    autoprefixer,
    postcssNormalize,
    postcssNested,
  ],
};
