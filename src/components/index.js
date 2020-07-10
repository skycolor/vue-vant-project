// 全检索components文件夹下的vue文件，格式为*-*.vue形式，-必不可少少
const requireComponent  = require.context('./', true, /[a-z]\w+-+[a-z]\w+\.(vue|js)$/)
const components =  requireComponent.keys().map(fileName => {
  const component = requireComponent(fileName)
  // 根据文件路径处理组件名
  const name = fileName.split('/').pop().replace(/\.\w+$/, '')
  return {
    name,
    component
  }
})

export default {
  install(Vue) {
    components.forEach(({name, component}) => {
      Vue.component(name, component.default || component)
    })
  }
}
