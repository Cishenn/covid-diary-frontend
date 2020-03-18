//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showBGImage: true,
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
  }
})
