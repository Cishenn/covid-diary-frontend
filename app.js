//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: "covid-diary-08myr",
      traceUser: true
    })
  },

  globalData: {
    userData: null, // 存放用户信息
    logged: false, // 存放登录状态
    categoryData: null, // 存放全局分类信息
    cityData: null, // 存放全局城市信息
    articleData: null // 存放全局部分文章谢谢
  }
})