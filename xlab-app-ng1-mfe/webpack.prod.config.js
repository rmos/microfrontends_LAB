const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  mode: 'production',
  output: {
    uniqueName: "appOne",
    publicPath: "http://xlab-mfe-ng1.s3-website-us-east-1.amazonaws.com/"
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

      library: { type: "module" },
      
      // For remotes (please adjust)
      name: "appOne",
      filename: "remoteEntry.js",
      exposes: {
          './moduleappone': 'src/app/pageone/pageone.module.ts',
      },        
      
      // For hosts (please adjust)

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true }, 
        "@angular/common/http": { singleton: true, strictVersion: true }, 
        "@angular/router": { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors()
      })
        
    }),
    sharedMappings.getPlugin()
  ],
};