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
    timeStamp: {
      beauty: [
        {
          time: "2020年1月23日",
          position: "武汉",
          event: "武汉开始封城"
        },
        {
          time: "2020年1月24日",
          position: "武汉",
          event: "上海、广东、解放军医疗队奔赴武汉"
        },
        {
          time: "2020年1月27日",
          position: "武汉",
          event: "李克强赴武汉考察指导"
        },
        {
          time: "2020年1月28日",
          position: "人民大会堂",
          event: "习近平会见卫生组织干事"
        },
        {
          time: "2020年2月1日",
          position: "武汉",
          event: "李兰娟院士团队奔赴武汉"
        },
        {
          time: "2020年2月-3月",
          position: "全国",
          event: "全国医护人员奋战在一线"
        },
        {
          time: "2020年3月中旬始",
          position: "中国",
          event: "援鄂医疗队分批撤离"
        }
      ],
      love: [
        {
          time: "2020年1月-2月中旬",
          position: "中国",
          event: "中国是抗击疫情的主战场"
        },
        {
          time: "2020年2月16日",
          position: "韩国",
          event: "韩国开始出现确诊病例"
        },
        {
          time: "2020年2月20日",
          position: "意大利",
          event: "意大利疫情开始爆发"
        },
        {
          time: "2020年2月20日-3月22日",
          position: "全世界",
          event: "全球各国确诊人数不断增高"
        },
        {
          time: "2020年2月29日",
          position: "伊朗",
          event: "中国红十字会志愿专家团队抵达伊朗"
        },
        {
          time: "2020年3月7日",
          position: "伊拉克",
          event: "中国医疗队抵达伊拉克"
        },
        {
          time: "2020年3月8日",
          position: "巴基斯坦",
          event: "苏州大学附属医院医疗团队援助巴基斯坦"
        },
        {
          time: "2020年3月10日",
          position: "意大利",
          event: "中国向意大利提供援助"
        },
        {
          time: "2020年3月25日",
          position: "意大利",
          event: "中国第三批医疗队抵达米兰"
        },
        {
          time: "2020年3月21日",
          position: "塞尔维亚",
          event: "中国专家团队抵达塞尔维亚"
        },
        {
          time: "2020年3月26日",
          position: "中国",
          event: "中国已经宣布向82个国家和提供援助"
        }
      ]
    },
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
