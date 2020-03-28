const app = getApp();

Page({
  data: {
    articleData: null,
    keyword: "",
    searchResult: []
  },

  onLoad(options) {
    this.setData({
      articleData: app.globalData.articleData
    })
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
    let searchResult = []

    if (keyword.length != 0) {
      searchResult = this.data.articleData.filter(item => {
        return item.title.indexOf(keyword) != -1 || item.location.indexOf(keyword) != -1
      })
      this.setData({
        searchResult: searchResult.sort((a, b) => {
          return (b.like_num + b.view_num) - (a.like_num + a.view_num)
        })
      })
    }
    else {
      this.setData({
        searchResult: []
      })
    }
  },

  handleNavigateToArticle(event) {
    let _id = event.currentTarget.dataset.index
    wx.redirectTo({
      url: `/pages/article/article?_id=${_id}`
    });
  }
})