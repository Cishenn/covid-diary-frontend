Page({
  data: {
    article: null,
    activeNames: ["1"],
    floorstatus: false
  },

  onLoad(options) {
    const _id = parseInt(options._id)
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });
    if (options.hasOwnProperty("_id")) {
      wx.cloud.callFunction({
        name: 'getArticleAPI',
        data: {
          _ids: [_id]
        },
        success: res => {
          let article = res.result[0]
          wx.cloud.callFunction({
            name: 'incrArticleViewNumAPI',
            data: {
              _id
            },
            success: res => {
              article.view_num = res.result
              this.setData({
                article
              })
              wx.hideLoading();
            },
            fail: console.error
          })
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
  },

  onPageScroll(e) {
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  goPageTop(e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
});