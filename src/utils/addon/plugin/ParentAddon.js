// 默认处理插件
export default class ParentAddon {
    constructor() {
      this.info = 'h5'
    }
    // 处理跳转
    handleRouterBeforeEach(to, from, next) {
      this.setPreUrl(to, from)
      document.title = to.name
      return next()
    }
    // 设置前置链接
    setPreUrl(to, from) {
      let path = window.location.href
      if (path.indexOf('#') > -1) {
        let currentUrl = path.substr(0, path.indexOf('#') + 1)
        path = currentUrl + from.fullPath
      } else {
        path = document.referrer
      }
    }
    // 页面加载完成
    pageReady() {
      
    }
  }
  