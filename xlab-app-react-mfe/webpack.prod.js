const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'production',

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
        favicon: './public/favicon.ico'
        }),
  ],
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,

        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,

        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },

      /*{
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
      },*/
    ],
  },
};