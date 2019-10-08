const formatTime = date => {
  const nowDate = new Date(date*1000)
  const year = nowDate.getFullYear()
  const month = nowDate.getMonth() + 1
  const day = nowDate.getDate()
  const hour = nowDate.getHours()
  const minute = nowDate.getMinutes()
  const second = nowDate.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}