const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log("dirname___ ", __dirname);

module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      //path: __dirname + '/public',
      filename: 'bundle.js',
      publicPath: "http://localhost:5003/",
      //publicPath: "auto",
      uniqueName: "mfer-wc"
    },
    optimization: {
      runtimeChunk: false
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
        new ModuleFederationPlugin({
        
            // For remotes (please adjust)
            name: "mfer",
            //library: { type: "var", name: "mfer" },
            filename: "remoteEntry.js",
            exposes: {
                './web-components': './src/App.js',
            },        
            shared: ["react", "react-dom"]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./public/index.html",
            }),
    ],
    devServer: {
      port: 5003,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      }
    /*contentBase:  __dirname + '/public',
      port: 5003,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      },*/
    }
  }
}