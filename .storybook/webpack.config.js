const Dotenv = require("dotenv-webpack");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.plugins.push(new Dotenv());

  return config;
};
