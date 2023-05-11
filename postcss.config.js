import presetEnv from 'postcss-preset-env';
import flexBugsFixes from 'postcss-flexbugs-fixes';
import postcssNormalize from 'postcss-normalize';

export default {
  plugins: [presetEnv({ stage: 1 }), flexBugsFixes(), postcssNormalize()],
};
