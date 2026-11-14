const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// Callers: package.json "start" → webpack serve --config webpack.config.dev.js
// Existing file updated to avoid chokidar watching node_modules (ENOSPC).
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    // Serve project root, but do not recursively watch node_modules (ENOSPC).
    static: {
      directory: path.resolve(__dirname),
      watch: {
        ignored: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
      },
    },
    watchFiles: {
      paths: ['index.html', 'js/**/*.js', 'css/**/*.css', 'img/**/*', 'icons/**/*'],
      options: {
        ignored: /node_modules/,
      },
    },
  },
});
