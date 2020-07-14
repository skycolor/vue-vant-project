const Mock = require('mockjs');
// 遍历文件夹获取mock数据
const requireMocks = require.context('./modules', true, /\.js$/)
requireMocks.keys().forEach(fileName => {
  const mocksInfo = requireMocks(fileName)
  const mocksArr = mocksInfo.default || mocksInfo
  mocksArr.forEach(item => {
    Mock.mock(item.url, {
      code: 0,
      message: 'success',
      data: item.data
    });
  })
})
