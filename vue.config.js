const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      // 忽略moment
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  }
}