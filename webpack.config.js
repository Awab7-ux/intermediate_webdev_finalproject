const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

class StripSourceScriptPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("StripSourceScriptPlugin", (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tap(
        "StripSourceScriptPlugin",
        (data) => {
          data.html = data.html.replace('<script src="src/script.js"></script>', "");
          return data;
        }
      );
    });
  }
}

module.exports = {
  mode: "production",
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "style.css", to: "style.css" }]
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico"
    }),
    new StripSourceScriptPlugin()
  ]
};