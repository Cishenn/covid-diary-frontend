Page({
  data: {
    floorstatus: false,
    comment_list: [
      {
        "_id": 0,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_1.svg",
        "name": "匿名同学",
        "content": "病毒无情!人间有情!武汉加油!中国加油!",
        "time": "2020-4-5 11:50",
        "like": 0,
      },
      {
        "_id": 1,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_1.svg",
        "name": "匿名同学",
        "content": "我知道大家最近生活有蛮多不便的地方，但是我也晓得我们每个武汉人都在努力保护这座城市。感谢所有奋战在一线的医务人员，你们辛苦了!武汉加油!中国加油！",
        "time": "2020-4-5 12:00",
        "like": 0,
      },
      {
        "_id": 2,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "匿名同学",
        "content": "特殊时刻，背后有我们仰仗和依赖的国家。武汉加油。中国加油!",
        "time": "昨天 12:03",
        "like": 0,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "匿名同学",
        "content": "坚持就是胜利，大家挺住了，在家没啥，我们一起共渡难关。困难只是一时，不会是一直。有患难，也会有幸福，只要心理依然有爱。让世界看看中国的强大暨凝聚力，中国加油，武汉加油。",
        "time": "昨天 12:05",
        "like": 0,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "匿名同学",
        "content": " 为了社会，为了以后的美好生活，更为了家人们，非常时期请大家都宅在家里。通过官方渠道了解疫情，不信谣更不传谣。做到正确认识，不恐慌也不要盲目乐观!武汉只是暂时生病了，武汉的封城也是中国的大爱，请大家不要对武汉恐慌，更不要排斥武汉，相信武汉不久定会病愈。加油武汉，加油湖北，加油中国!",
        "time": "昨天 12:05",
        "like": 0,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "匿名同学",
        "content": "因为怀着同样的爱，我们一定会战胜一切困难，向奋战在一线的英雄们致敬!",
        "time": "昨天 12:05",
        "like": 0,
      },
      {
        "_id": 3,
        "avatar": "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/其他图片/avatar_2.svg",
        "name": "匿名同学",
        "content": "感谢武汉人民为此次战役做出的巨大牺牲，也感谢全国各地的医护人员争分夺秒在与疫情赛跑，疫情终将散去，武汉也会恢复正常，英雄们，我们等您凯旋，接您回家，感谢你们，也谢谢李现用歌声温暖你我为武汉加油！",
        "time": "昨天 12:05",
        "like": 0,
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