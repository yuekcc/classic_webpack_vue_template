const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.cjs');
const currentConfig = require('../build.config.cjs');
const finalConfig = merge(baseConfig, currentConfig);

console.log('Build begin\n');
webpack(finalConfig, (err, states) => {
  if (err) {
    console.log('Webpack run failed, %s', err.message);
    process.exit(1);
  }

  console.log(states.toString() + '\n');
  console.log('Build end');
});
