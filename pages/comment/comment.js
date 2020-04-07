Page({
  data: {
    floorstatus: false,
    comment_list: [
      {
        "_id": 0,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_1.svg",
        "name": "匿名同学",
        "content": "杨诗杰是个彻头彻尾的弟弟",
        "time": "2020-4-5 11:50",
        "like": 99999,
      },
      {
        "_id": 1,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_1.svg",
        "name": "张炳武",
        "content": "我建议开除叛党分子杨诗杰",
        "time": "2020-4-5 12:00",
        "like": 99999,
      },
      {
        "_id": 2,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "梁樑",
        "content": "我同意, 顺便开除学籍",
        "time": "昨天 12:03",
        "like": 999999,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "其他同学",
        "content": "大快人心 哈哈哈",
        "time": "昨天 12:05",
        "like": 999999,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "其他同学",
        "content": "大快人心 哈哈哈",
        "time": "昨天 12:05",
        "like": 999999,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "其他同学",
        "content": "大快人心 哈哈哈",
        "time": "昨天 12:05",
        "like": 999999,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "其他同学",
        "content": "大快人心 哈哈哈",
        "time": "昨天 12:05",
        "like": 999999,
      },
    ]
  },

  /**
   * 
   */
  handleNavigate() {
    wx.navigateBack();
  },

  /**
   * 
   */
  handleReply() {

  },

  /**
   * 
   * @param {} options 
   */
  handleLike() {
    // 发送根据comment_id 的 like +1 的请求.
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
  }
})