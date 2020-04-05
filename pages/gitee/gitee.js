
Page({
  data: {
    contents: '这是可以复制的文字,粘贴后即可看到效果'
  },
  copyText: function (e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

  onLoad: function (options) {

  },
  handleNavigate() {
    wx.navigateBack();
  }
})