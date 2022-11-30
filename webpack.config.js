const path = require('path');

module.exports = (env) => {
  return {
    entry: './scripts/index.js',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: env.browsers === 'modern' ? [
            /node_modules/,
            /\bcore-js\b/,
            /\bwebpack\/buildin\b/
          ] : [
            /\bcore-js\b/,
            /\bwebpack\/buildin\b/
          ],
          loader: 'babel-loader',
      }
      ]
    },

    output: {
      filename: env.browsers === 'modern' ? 'modern.js' : 'legacy.js',
      path: path.resolve(__dirname, 'scripts'),
    },

    mode: 'production'
  }
}
