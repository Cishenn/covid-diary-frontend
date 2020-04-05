
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorstatus: false,
    manual: [
      {
        "_id": 0,
        "title": "\"疫情日记\"使用帮助",
        "info": "\"疫情日记\"是记录今年爆发的新冠状病毒相关信息的小程序, 可以为用户提供更加深入了解, 防护新冠状病毒等等服务",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/main_city.JPG",
      },
      {
        "_id": 1,
        "title": "疫情主要城市分类功能",
        "info": "针对疫情情况下不同城市来介绍，包括城市简介，城市主题日记",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/main_city.JPG",
      },
      {
        "_id": 2,
        "title": "日记功能",
        "info": "记录疫情情况下，中国的情况，城市的应对措施等等",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/diary.JPG",
      },
      {
        "_id": 3,
        "title": "推荐功能",
        "info": "推荐本小程序，建议用户观看的相关知识文章或者日记。",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/recommend.JPG",
      },
      {
        "_id": 4,
        "title": "搜索功能",
        "info": "用户可以搜索感兴趣的知识，也可以搜索相关城市文章日记的名称。",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/search.JPG",
      },
      {
        "_id": 5,
        "title": "收藏功能",
        "info": "用户可以收藏文章日记（或者城市），然后再收藏，面板中快捷找到链接。",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/favorites.JPG",
      },
      {
        "_id": 6,
        "title": "浏览历史功能",
        "info": "用户之前所查看的文章日记，可以在历史中查看。",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/history.JPG",
      },
      {
        "_id": 7,
        "title": "留言板功能",
        "info": "留言板功能，可以满足用户对文章日记或城市主题的评价。",
        "img": "",
      },
      {
        "_id": 8,
        "title": "小测验功能",
        "info": "留言板功能，可以满足用户对文章日记或城市主题的评价。",
        "img": "",
      },
      {
        "_id": 9,
        "title": "防疫攻略和防疫小贴士",
        "info": "防疫攻略和防疫小贴士为用户，展示各种防治疫情的小攻略小方法",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/tips.JPG",
      },
      {
        "_id": 10,
        "title": "疫情时间线",
        "info": "疫情时间线以时间为主线，展开疫情的日记，为用户展示疫情的时间线记录",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/timeline.JPG",
      },
      {
        "_id": 11,
        "title": "32张感恩海报",
        "info": "32张感恩海报则是展示疫情情况下全国人民和医护人员做出的巨大努力感恩宣传",
        "img": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/帮助文档/32poster.JPG",
      },

    ]
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