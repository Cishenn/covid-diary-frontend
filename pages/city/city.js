Page({
  data: {
    city: null,
    articles: [],
    activeNames: ['1'],
    is_zk: false,
  },

  onLoad(options) {
    let _id = parseInt(options._id)
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });

    wx.cloud.callFunction({
      name: 'getCityAPI',
      data: {
        _id
      },
      success: res => {
        let city = res.result[0]
        wx.cloud.callFunction({
          name: 'getArticleAPI',
          data: {
            _ids: city.content
          },
          success: res => {
            this.setData({
              articles: res.result,
              city
            })
            wx.hideLoading();
          },
          fail: console.error
        })
      },
      fail: console.error
    })
  },

  /**
   * 
   */
  zk: function () {
    var that = this
    that.setData({
      is_zk: !that.data.is_zk
    })
  },

  /**
   * 返回
   */
  handleNavigate() {
    wx.navigateBack();
  },

  /**
   * 文章列表
   */
  onCollapseChange(event) {
    this.setData({
      activeNames: event.detail
    });
  }
})