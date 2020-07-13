export default {
    // 四舍五入（number数字、precision位数）
    round (number, precision = 2) {
      precision = precision == null ? 0 : (precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292))
      if (precision) {
        let pair = `${number}e`.split('e')
        const value = Math.round(`${pair[0]}e${+pair[1] + precision}`)
        pair = `${value}e`.split('e')
        return (+`${pair[0]}e${+pair[1] - precision}`).toFixed(precision || 0)
      }
      return Math.round(number)
    },
    // 乘法
    mult () {
      let args = arguments
      let mults = Array.prototype.map.call(args, item => {
        let dot = item.toString().split('.')[1]
        return !dot ? 0 : dot.length
      })
      let newArgs = Array.prototype.map.call(args, (item) => {
        return Number(item.toString().replace('.', ''))
      })
      let sumBase = mults.reduce((sum, item) => { sum += item; return sum })
      return newArgs.reduce((sum, item) => {
        sum = sum * item
        return sum
      }) / Math.pow(10, sumBase)
    }
  }