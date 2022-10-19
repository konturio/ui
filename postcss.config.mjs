import autoprefixer from 'autoprefixer';
import postcssNormalize from 'postcss-normalize';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import csso from 'postcss-csso';

export default {
  plugins: [
    postcssImport,
    autoprefixer,
    postcssNormalize,
    postcssNested,
    csso
  ],
};
