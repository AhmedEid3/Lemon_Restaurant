import presetEnv from 'postcss-preset-env';
import flexBugsFixes from 'postcss-flexbugs-fixes';
import postcssNormalize from 'postcss-normalize';
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    presetEnv({ stage: 1 }),
    flexBugsFixes(),
    postcssNormalize(),
    purgecss({
      content: ['./**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
    }),
  ],
};
