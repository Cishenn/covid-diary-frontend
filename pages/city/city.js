Page({

  /**
   * 页面的初始数据
   */
  data: {
    // city 的作用相当于placeholder, 待杨老板后端对好, 将city置为null 数据直接渲染
    city:{
      bg_images: [
        "/images/wuhan.jpg",
      ],
      _id: 1,
      city_name: "武汉",
      city_en_name: "Wuhan",
      description: "武汉，简称汉，别称江城，是湖北省省会，中部六省唯一的副省级市，特大城市，国务院批复确定的中国中部地区的中心城市，全国重要的工业基地、科教基地和综合交通枢纽 [1]  。截至2019年末，全市下辖13个区，总面积8569.15平方千米，户籍人口908.35万人，流动人口510.30万人。 [2-6] 武汉地处江汉平原东部、长江中游，长江及其最大支流汉江在此交汇，形成武昌、汉口、汉阳三镇鼎立的格局，市内江河纵横、湖港交织，水域面积占全市总面积四分之一。作为中国经济地理中心，武汉素有“九省通衢”之称，是中国内陆最大的水陆空交通枢纽和长江中游航运中心，其高铁网辐射大半个中国，是华中地区唯一可直航全球五大洲的城市。 [7-11] 武汉是长江经济带核心城市、中部崛起战略支点、全面创新改革试验区、联勤保障部队机关驻地，也是全国三大智力密集区之一，中国光谷致力打造有全球影响力的创新创业中心。根据国家发改委要求，武汉正加快建成以全国经济中心、高水平科技创新中心、商贸物流中心和国际交往中心四大功能为支撑的国家中心城市",
      content: [1,2]
    },
    activeNames: [],
    is_zk: false,
  },

  /**
   * 
   */
  zk:function(){
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