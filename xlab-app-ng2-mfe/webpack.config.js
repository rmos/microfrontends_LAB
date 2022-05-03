const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfeTwo",
    publicPath: ""
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
      name: "mfeTwo",
      filename: "remoteEntry.js",
      exposes: {
          './moduleapptwo': 'src/app/modules/mfe.module.ts',
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
    sharedMappings.getPlugin(),
  ],
  devServer: {
    port: 5002,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      },
  }
};