import axios from 'axios'
let axiosInstance
// 超时时间
const timeout = 30000
// 封装请求
class MyRequest {
  constructor() {
    axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_BASE_API,
      timeout
    })
    // 添加请求拦截器
    axiosInstance.interceptors.request.use(config => {
      let { isLoading } = config.options
      if (config.method == 'get' && config.data) {
        config.params = config.data
      }
      // 处理请求Loading
      isLoading && global.toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: timeout
      })
      return config
    }, error => {
        global.toast.clear()
        return Promise.reject(error)
    })
    // 添加响应拦截器
    axiosInstance.interceptors.response.use(response => {
      global.toast.clear()
      if (!response || !response.data) return Promise.reject(response)
      let res = response.data
      if (res.code !== 0 || res.message !== 'success') {
        let { dealException } = response.config.options || {}
        if (!dealException) {
          global.toast(res.message || '服务忙，请稍后再试')
        }
        return Promise.reject(res)
      }
      return res
    }, error => {
      global.toast.clear()
      global.toast('服务忙，请稍后再试')
      return Promise.reject(error)
    })
  }
  sendRrquest(url, method, data, header, options) {
    return axiosInstance({
      method: method,
      url: url,
      data: data,
      headers: header,
      options
    })
  }
}
let myRequest = new MyRequest()
// 出请求
let MyHttp = function (defaultParams, ALL_API) {
  let resource = {}
  for (let actionName in ALL_API) {
    let _config = ALL_API[actionName]
    // options为对象包含（dealException：是否单独处理错误信息, isLoading：是否显示Loading，contentType请求类型）
    resource[actionName] = (pdata, options = {}) => {
      let paramsData = Object.assign({}, defaultParams, pdata)
      return myRequest.sendRrquest(_config.url, _config.method, paramsData, {
        'Content-Type': options.contentType || 'application/json;charset=UTF-8'
      }, options)
    }
  }
  return resource
}
export default MyHttp
