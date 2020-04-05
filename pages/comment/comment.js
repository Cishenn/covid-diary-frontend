// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment_list:[
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})