//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showBGImage: true,
    showSettings: false,
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

  handleShowSettings() {
    this.setData({
      showSettings: !this.data.showSettings
    });
  },
})
