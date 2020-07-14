const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: !isProd ? '/' : '',
  productionSourceMap: false,
  configureWebpack: config => {
    // 配置webpack 压缩
    if (isProd) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      )
    }
    // 配置cdn的忽略文件
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  },
  chainWebpack: config => {
    // 全局引入mixin.less
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/styles/mixin.less',
        })
        .end()
    })
  },
  devServer: {
    port: 8888,
    https: false,
    open: true,
    proxy: {
      '/apis': {
        target: 'https://mini.today36524.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      },
    }
  }

}