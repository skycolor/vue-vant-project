import MyHttp from './req'
const requireApis = require.context('./apis', true, /\.js$/)
const apiInfoArr = requireApis.keys().map(fileName => {
  const apiInfo = requireApis(fileName)
  return apiInfo.default || apiInfo
})
const ALL_API = Object.assign({}, ...apiInfoArr)
const api = new MyHttp({}, ALL_API)
export default api



