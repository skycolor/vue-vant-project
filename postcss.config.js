
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      // 设计稿宽度
      viewportWidth: 750,
      // 由px转vw值，小数点数
      unitPrecision: 4,     // 指定`px`转换为视窗单位值的小数位数
      // 转换单位，就vw
      viewportUnit: "vw",   
      // 指定忽略的class，该项目采用.ignore的正则表达
      selectorBlackList: ['.ignore', '.van-'],
      // 表示最小的不转换单位值
      minPixelValue: 1,
      // 允许在媒体查询中转换`px`
      mediaQuery: false
    }
  }
}