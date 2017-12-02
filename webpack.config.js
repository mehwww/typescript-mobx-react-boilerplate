const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJS = require("uglify-es");

const replacePlugin = (plugins, plugin, name) => {
  const pluginName = name || plugin.constructor.name;
  const pluginIndex = _.findIndex(plugins, (p) => p.constructor.name === pluginName)
  if (pluginIndex === -1) {
    console.warn(`Unable to replace plugin ${pluginName}: Not Found`)
  } else {
    plugins.splice(pluginIndex, 1, ...(_.isArray(plugin) ? plugin : [plugin]));
  }
}

module.exports = (config, env) => {
  if (env !== 'production') {
    config.entry.index.unshift('react-hot-loader/patch');
  }
  replacePlugin(config.plugins, new HtmlWebpackPlugin({
    template: 'src/index.ejs',
    inject: true,
    minify: env !== 'production' ? false : {
      // removeAttributeQuotes: true,
      // collapseWhitespace: true,
      html5: true,
      minifyCSS: true,
      minifyJS: (text, inline) => {
        return UglifyJS.minify(text).code;
      },
      removeComments: true,
      removeEmptyAttributes: true,
    },
  }))
  config.resolve.alias = Object.assign(
    {},
    config.resolve.alias,
    { '@': path.resolve(__dirname, 'src') },
  );
  return config;
};
