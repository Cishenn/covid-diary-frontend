Page({
  data: {
    title: "",
    bg_image: "",
    floorstatus: false,
    bg_image_data: {
      "reduceRisk": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/1.png",
      "personalProtection": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/2.png",
      "scienceQuiz": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/3.png",
      "protectionGuide": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/4.png"
    }
  },

  onLoad(options) {
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });
    let { theme } = options
    switch (theme) {
      case "personalProtection": {
        this.setData({
          title: "如何做好个人防护",
          bg_image: this.data.bg_image_data.personalProtection
        })
      }; break
      case "reduceRisk": {
        this.setData({
          title: "如何降低感染风险",
          bg_image: this.data.bg_image_data.reduceRisk
        })
      }; break
      case "scienceQuiz": {
        this.setData({
          title: "新冠病毒科学问答",
          bg_image: this.data.bg_image_data.scienceQuiz
        })
      }; break
      case "protectionGuide": {
        this.setData({
          title: "冠状病毒防护指南",
          bg_image: this.data.bg_image_data.protectionGuide
        })
      }; break
    }
    wx.hideLoading();
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
})