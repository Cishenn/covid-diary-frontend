//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userData: null,
    categoryData: null,
    cityData: null,
    hotArticle: null,
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

  onLoad(options) {
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });

    wx.cloud.callFunction({
      name: 'serverInitAPI',
      success: res => {
        app.globalData.categoryData = res.result.categoryData
        app.globalData.cityData = res.result.cityData
        app.globalData.articleData = res.result.articleData
        // 更新首页的数据信息
        this.setData({
          categoryData: res.result.categoryData,
          cityData: res.result.cityData
        })
      },
      fail: res => {
        wx.showToast({
          title: '数据加载失败',
          icon: 'none',
          mask: true
        });
      }
    })

    this.getHotArticle()
  },

  onShow() {
    this.getHotArticle()
  },

  getHotArticle() {
    wx.cloud.callFunction({
      name: 'getHotArticleAPI',
      data: {
        limit: 10
      },
      success: res => {
        this.setData({
          hotArticle: res.result
        })
        wx.hideLoading();
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

  handleUserLogin(event) {
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });

    wx.cloud.callFunction({
      name: 'userLoginAPI',
      data: {
        userInfo: event.detail.userInfo
      }
    }).then(res => {
      this.setData({
        userData: res.result
      })
      app.globalData.userData = res.result// 更新全局用户数据
      app.globalData.logged = true
      wx.hideLoading();
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        mask: true
      });
    }).catch(res => {
      wx.hideLoading();
      wx.showToast({
        title: '登录失败',
        icon: 'none',
        mask: true
      });
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
  },

  handleNavigateToArticle(event) {
    // let article = JSON.stringify(event.currentTarget.dataset.article);
    let _id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/article/article?_id=${_id}`
    });
  },
})
