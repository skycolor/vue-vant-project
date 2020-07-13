import AndroidAddon from './plugin/AndroidAddon'
import IosAddon from './plugin/IosAddon'
import ParentAddon from './plugin/ParentAddon'

class Addon {
  constructor() {
    const userAgent = window.navigator.userAgent
    if (/(Android)/i.test(userAgent)) {
      this.currentAddon = new AndroidAddon()
    } else if (/(iPhone|iPad|iPod|iOS)/i.test(userAgent)) {
      this.currentAddon = new IosAddon()
    } else {
      this.currentAddon = new ParentAddon()
    }
  }
  handleRouterBeforeEach(to, from, next) {
    this.currentAddon.handleRouterBeforeEach(to, from, next)
  }
  pageReady() {
    this.currentAddon.pageReady()
  }
  /**
   * 获取addon容器
   */
  getAddonInfo(){
    return this.currentAddon.info
  }
}

export let addon = new Addon()