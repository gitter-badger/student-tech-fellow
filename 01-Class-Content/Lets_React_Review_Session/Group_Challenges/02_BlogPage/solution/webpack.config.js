const webpack = require("webpack");
const path = require('path');

/*------------------------------------------------------------------------------
 NOTE: This webpack everything is a module so it becomes eaiser to ship
 dependencies to the client in a single file or a set of files from the server.
------------------------------------------------------------------------------*/

// This is a configuration object
module.exports = {
  context: path.resolve(__dirname, 'app'),
  // entry is where webpack will begin to evaluate files it needs to process
  entry: './index.js',
  // output is necessary to tell webpack where to place your bundled modules
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              sourceMaps: true,
              presets: ["latest", 'react']
            }
          }
        }
      ]
    }
  };
