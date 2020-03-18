//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: "covid-diary-08myr",
      traceUser: true
    })
  },
  globalData: {
    userInfo: null
  }
})