Page({
  data: {
    picGroup: [],
    floorstatus: false
  },

  onLoad(options) {
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });
    wx.cloud.callFunction({
      name: 'getPicAPI',
      data: {
      }
    }).then(res => {
      this.setData({
        picsGroup: res.result
      })
      wx.hideLoading();
    }).catch(res => {
      wx.hideLoading();
      wx.showToast({
        title: '数据加载失败',
        icon: 'none',
        mask: true
      });
    })
  },

  handleNavigate() {
    wx.navigateBack();
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
  },
});