const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  mode: 'production',
  output: {
    uniqueName: "xlab-app-shell-container",
    publicPath: "http://xlab-app-shell.s3-website-us-east-1.amazonaws.com/"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({

        remotes: {
            "appOne": "http://xlab-mfe-ng1.s3-website-us-east-1.amazonaws.com/remoteEntry.js",
            "mfeTwo": "http://xlab-mfe-ng2.s3-website-us-east-1.amazonaws.com/remoteEntry.js",
            "mfer": "http://xlab-mfe-react.s3-website-us-east-1.amazonaws.com/remoteEntry.js"
        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin()
  ]
}