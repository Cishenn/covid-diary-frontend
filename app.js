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
        this.globalData.categoryData = res.result.categoryData
        this.globalData.cityData = res.result.cityData
      },
      fail: res => {
        wx.showToast({
          title: '数据加载失败',
          icon: 'none',
          mask: true
        });
      }
    })
  },

  globalData: {
    userData: null, // 存放用户信息
    logged: false, // 存放登录状态
    categoryData: null, // 存放全局分类信息
    cityData: null // 存放全局城市信息
  }
})