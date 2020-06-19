const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./standalone.js",
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "standalone.js",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
