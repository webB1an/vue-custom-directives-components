// eslint.config.js
import antfu from '@antfu/eslint-config';

export default await antfu(
  {
    rules: {
      'comma-dangle': [2, 'never'],
      'style/comma-dangle': [2, 'never'],
      'semi': [2, 'always'],
      'style/semi': [2, 'always']
    }
  }
);
