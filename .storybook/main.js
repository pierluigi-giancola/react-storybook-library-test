const projectWebpack = require('../webpack.config')

const webpackFinal = (config) => {
  return { ...config, module: { ...config.module, rules: projectWebpack.module.rules } }
};

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: webpackFinal
};