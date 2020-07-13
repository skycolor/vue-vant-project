export default {
    // 格式化日期
    formatDate: (value, format = 'YYYY-MM-DD') => value ? global.moment(value).format(format) : value,
}