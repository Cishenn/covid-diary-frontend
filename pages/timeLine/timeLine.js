const app = getApp();
const DEFAULT_PAGE = 0;

Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    category_title: "",
    category_data: null,
    article_data: [],
    toView: `card_${DEFAULT_PAGE}`,
    imageList: [
      {
        id: 1,
        image_name: "幸得有你，山河无恙，人间结安",
        image_src: "/images/card_image1.jpg"
      },
      {
        id: 2,
        image_name: "谢谢你们，护我周全",
        image_src: "/images/card_image2.jpg"
      },
      {
        id: 3,
        image_name: "我们都是平凡人，却有白衣天使为生命逆行",
        image_src: "/images/card_image3.jpg"
      },
      {
        id: 4,
        image_name: "我们都是平凡人，却有白衣天使为生命逆行",
        image_src: "/images/card_image4.jpg"
      }
    ]
  },

  onLoad(options) {
    let { category } = options

    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });
    let [category_data] = app.globalData.categoryData.filter((item, index) => {
      return item._id == category
    })

    wx.cloud.callFunction({
      name: 'getArticleAPI',
      data: {
        _ids: category_data.content
      },
      success: res => {
        let article_data = res.result
        wx.cloud.callFunction({
          name: 'incrCategoryViewNumAPI',
          data: {
            _id: category
          },
          success: res => {
            app.globalData.categoryData = res.result
            category_data.view_num += 1
            this.setData({
              category_title: category_data.title,
              category_data,
              article_data: article_data
            })
            wx.hideLoading();
          },
          fail: console.error
        })
      },
      fail: console.error
    })
  },

  onShow() {
    if (this.data.category_data) {
      this.getArticle()
    }
  },

  getArticle() {
    wx.cloud.callFunction({
      name: 'getArticleAPI',
      data: {
        _ids: this.data.category_data.content
      },
      success: res => {
        this.setData({
          article_data: res.result
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

  handleNavigateToArticle(event) {
    // let article = JSON.stringify(event.currentTarget.dataset.article);
    let _id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/article/article?_id=${_id}`
    });
  },

  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.imageList.length - 1;
    if (Math.abs(moveX) >= 100) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },

  handleNavigate() {
    wx.navigateBack();
  }
})