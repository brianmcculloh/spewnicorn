const path = require('path');

module.exports = {
  entry: './script.js', // Replace with path to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
  },
  mode: 'development', // Use 'production' for minified output
};
