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
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/2_index.png",
        navigateTo: "/pages/prevent/prevent?theme=personalProtection"
      },
      {
        _id: 1,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/1_index.png",
        navigateTo: "/pages/prevent/prevent?theme=reduceRisk"
      },

      {
        _id: 2,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/3_index.png",
        navigateTo: "/pages/prevent/prevent?theme=scienceQuiz"
      },
      {
        _id: 3,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/4_index.png",
        navigateTo: "/pages/prevent/prevent?theme=protectionGuide"
      },
      {
        _id: 4,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/xiaotieshi.png",
        navigateTo: "/pages/tips/tips?theme=tips"
      },
      {
        _id: 5,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/poster.jpg",
        navigateTo: "/pages/cards/cards"
      }
    ],
    timeStamp: {},
    active: 0
  },

  onLoad(options) {
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });

    wx.cloud.callFunction({
      name: 'serverInitAPI',
      success: res => {
        let res1 = res
        app.globalData.categoryData = res.result.categoryData
        app.globalData.cityData = res.result.cityData
        app.globalData.articleData = res.result.articleData
        wx.cloud.downloadFile({
          fileID: 'cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/数据文档/time_line_data.json',
          success: res => {
            let res2 = res
            const FileSystemManager = wx.getFileSystemManager()
            FileSystemManager.readFile({
              filePath: res2.tempFilePath,
              encoding: "utf-8",
              success: res => {
                // 更新首页的数据信息
                this.setData({
                  timeStamp: JSON.parse(res.data),
                  categoryData: res1.result.categoryData,
                  cityData: res1.result.cityData
                })
                wx.hideLoading();
              }
            })
          },
          fail: err => {
            // handle error
          }
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
    this.setData({
      categoryData: app.globalData.categoryData
    })
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
        mask: false
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

  /**
   * 跳转美丽中国
   */
  // tapBeauty: function () {
  //   wx.navigateTo({
  //     url: '/pages/beauty-part/beauty-part'
  //   });
  // },

  /**
   * 跳转和谐中国
   */
  // tapHarmony: function () {
  //   wx.navigateTo({
  //     url: '/pages/harmony-part/harmony-part'
  //   })
  // },

  /**
   * 跳转更多日记
   */
  diaryMore: function () {
    wx.navigateTo({
      url: '/pages/diary-more/diary-more'
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

  /**
   * 跳转城市详情界面   暂时如此
   */
  handleNavigateToCity(event) {
    let _id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/city/city?_id=${_id}`
    });
  }
})
