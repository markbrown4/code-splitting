const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  }
};
