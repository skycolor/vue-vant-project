// 默认处理插件
export default class ParentStore {
    constructor() {
        this.prefix = 'sky_'
    }
    set(key, value, fn) {
        try {
          value = JSON.stringify(value)
        } catch (e) {
          console.log("error:", e);
        }
        this.store.setItem(this.prefix + key, value)
        fn && fn()
    }
    get(key) {
        if (!key) {
            throw new Error('没有找到key。')
        }
        if (typeof key === 'object') {
            throw new Error('key不能是一个对象。')
        }
        var value = this.store.getItem(this.prefix + key)
        if (value !== null) {
            try {
                value = JSON.parse(value)
            } catch (e) {
                console.log("error:", e);
            }
        }
        return value
    }
    remove(key) {
        this.store.removeItem(this.prefix + key)
    }
  }
  