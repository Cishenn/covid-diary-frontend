//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userData: null,
    categoryData: null,
    cityData: null,
    moreDiary: null
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

    this.getMoreDiary()
  },

  onShow() {
    this.getMoreDiary()
    this.setData({
      categoryData: app.globalData.categoryData
    })
  },

  getMoreDiary() {
    wx.cloud.callFunction({
      name: 'getMoreDiaryAPI',
      data: {
        limit: 10
      },
      success: res => {
        this.setData({
          moreDiary: res.result
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

  handleNavigateToDiary(event) {
    // let article = JSON.stringify(event.currentTarget.dataset.article);
    let _id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/article/article?_id=${_id}`
    });
  }

  /**
   * 跳转城市详情界面   暂时如此
   */
  
})
