Page({
  data: {
    article: null,
    activeNames: ["1"]
  },

  onLoad(options) {
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });
    if (options.hasOwnProperty("_id")) {
      wx.cloud.callFunction({
        name: 'getArticleAPI',
        data: {
          _ids: [parseInt(options._id)]
        },
        success: res => {
          this.setData({
            article: res.result[0]
          })
          wx.hideLoading();
        },
        fail: console.error
      })
    }
    // if (options.hasOwnProperty("article")) {
    //   let article = JSON.parse(options.article)
    //   this.setData({
    //     article
    //   })
    //   wx.hideLoading();
    // } else if (options.hasOwnProperty("_id")) {
    //   wx.cloud.callFunction({
    //     name: 'getArticleAPI',
    //     data: {
    //       _ids: [parseInt(options._id)]
    //     },
    //     success: res => {
    //       this.setData({
    //         article: res.result[0]
    //       })
    //       wx.hideLoading();
    //     },
    //     fail: console.error
    //   })
    // }
  },

  handleNavigate() {
    wx.navigateBack();
  },

  onCollapseChange(event) {
    this.setData({
      activeNames: event.detail
    });
  }
});