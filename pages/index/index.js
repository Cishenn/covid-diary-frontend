//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showBGImage: true,
    showSettings: false,
    floorstatus: false,
    swiperList: [
      {
        _id: 0,
        image_src: "/images/scroll_image1.jpg"
      },
      {
        _id: 1,
        image_src: "/images/scroll_image2.jpg"
      },
      {
        _id: 2,
        image_src: "/images/scroll_image3.jpg"
      },
    ]
  },

  onLoad: function () {
    setTimeout(res => {
      this.setData({
        showBGImage: false
      })
    }, 1000)
  },

  /**
   * 跳转美丽中国
   */
  tapBeauty: function() {
    wx.navigateTo({ 
      url: '/pages/beauty-part/beauty-part'
    });
  },

  /**
   * 跳转和谐中国
   */
  tapHarmony: function() {
    wx.navigateTo({
      url: '/pages/harmony-part/harmony-part'
    })
  },
  handleShowSettings() {
    this.setData({
      showSettings: !this.data.showSettings
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
})
