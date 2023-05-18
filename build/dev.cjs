const webpack = require('webpack');
const { merge } = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');

const baseConfig = require('./webpack.base.cjs');
const currentConfig = require('../build.config.cjs');

const finalConfig = merge(baseConfig, currentConfig);

const compiler = webpack(finalConfig);
const devServerOptions = { ...finalConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
