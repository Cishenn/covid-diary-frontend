const app = getApp();

Page({
  data: {
    logged: false,
    emptyResult: false,
    articleData: null,
    keyword: "",
    searchResult: [],
    historySearchKeyword: [],
    hotKeywords: [
      "钟南山",
      "李兰娟",
      "李文亮"
    ]
  },

  onLoad(options) {
    if (app.globalData.logged) {
      this.setData({
        logged: true,
        articleData: app.globalData.articleData
      })

      wx.getStorage({
        key: app.globalData.userData._openid + "-keywords",
        success: res => {
          this.setData({
            historySearchKeyword: res.data || []
          })
        },
        fail: res => {
          console.log(res)
        }
      })
    } else {
      this.setData({
        articleData: app.globalData.articleData
      })
    }
  },

  onChange(event) {
    this.setData({
      keyword: event.detail
    });
    this.handleSearchArticle(event.detail.trim())
  },

  handleNavigate() {
    wx.navigateBack();
  },

  handleSearchArticle(keyword) {
    wx.showLoading({
      title: "玩命加载中",
      mask: true,
    });
    let searchResult = []

    if (keyword.length != 0) {
      searchResult = this.data.articleData.filter(item => {
        return item.title.indexOf(keyword) != -1 || item.location.indexOf(keyword) != -1
      })
      this.setData({
        emptyResult: searchResult.length > 0 ? false : true,
        searchResult: searchResult.sort((a, b) => {
          return (b.like_num + b.view_num) - (a.like_num + a.view_num)
        })
      })
    }
    else {
      this.setData({
        emptyResult: false,
        searchResult: []
      })
    }
    wx.hideLoading();
  },

  handleRedirectToSearch(event) {
    let keyword = event.currentTarget.dataset.keyword
    this.setData({
      keyword
    })
    this.handleSearchArticle(keyword)
  },

  handleNavigateToArticle(event) {
    let _id = event.currentTarget.dataset.index
    if (app.globalData.logged) {
      let historySearchKeyword = this.data.historySearchKeyword
      let index = historySearchKeyword.indexOf(this.data.keyword)
      if (index != -1) {
        historySearchKeyword.splice(index, 1)
      }
      historySearchKeyword.unshift(this.data.keyword)
      wx.setStorage({
        key: app.globalData.userData._openid + "-keywords",
        data: historySearchKeyword,
        success: res => {
          this.setData({
            historySearchKeyword
          })
        },
        fail: res => {
          console.log(res);
        }
      })
    }
    wx.redirectTo({
      url: `/pages/article/article?_id=${_id}`
    });
  },

  handleCleanSearchHistory(event) {
    if (app.globalData.logged) {
      wx.showModal({
        title: '清空',
        content: '确认清空搜索历史吗？',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确认',
        confirmColor: '#3871f5',
        success: (result) => {
          if (result.confirm) {
            wx.removeStorage({
              key: app.globalData.userData._openid + "-keywords",
              success: res => {
                this.setData({
                  historySearchKeyword: []
                })
                wx.showToast({
                  title: '清空成功',
                  icon: 'none'
                });
              },
              fail: res => {
                console.log(res);
              }
            })
          }
        },
        fail: () => { },
        complete: () => { }
      });
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
    }

  }
})