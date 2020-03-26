//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: "covid-diary-08myr",
      traceUser: true
    })

    wx.cloud.callFunction({
      name: 'serverInitAPI',
      success: res => {
        this.globalData.articleData = res.result.articleData
        this.globalData.categoryData = res.result.categoryData
        this.globalData.cityData = res.result.cityData
      },
      fail: console.error
    })
  },

  globalData: {
    userData: null, // 存放用户信息
    logged: false, // 存放登录状态
    articleData: null, // 存放全局文章消息
    categoryData: null, // 存放全局分类信息
    cityData: null // 存放全局城市信息
  }
})