import {baseURL,timeout} from './config.js'

function request(options){
  wx.showLoading({
    title: '正在加载中...',
  })

  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + options.url,
      data:options.data,
      success:res => {
        resolve(res.data)
      },
      fail:reject,
      complete:res =>{
        wx.hideLoading()
      }
    })
  })
}

export default request;