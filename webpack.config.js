const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = function(env) {
  const isDevelopment = env === "development";
  console.log(
    `This is a ${isDevelopment ? "development" : "production"} build`
  );
  const browserConfig = {
    mode: env,
    devtool: "source-map",
    entry: "./src/browser/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [{ test: /\.(js)$/, use: "babel-loader", exclude: /node_modules/ }]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "true"
      })
    ]
  };

  const serverConfig = {
    mode: env,
    entry: "./src/server/index.js",
    target: "node",
    devtool: "source-map",
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: "server.js",
      publicPath: "/"
    },
    module: {
      rules: [{ test: /\.(js)$/, use: "babel-loader", exclude: /node_modules/ }]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  };

  return [browserConfig, serverConfig];
};
