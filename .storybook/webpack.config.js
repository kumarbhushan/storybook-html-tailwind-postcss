const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config.module.rules[4]={
    test: /\.s[ca]ss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader'],
  };

  // Return the altered config
  return config;
};