const app = getApp();

Page({
  data: {
    selectItemGroup: [
      {
        _id: 1,
        title: "第一题",
        answer: "A",
        options: [
          "这是A",
          "这是B",
          "这是C",
          "这是D"
        ]
      },
      {
        _id: 2,
        title: "第二题",
        answer: "B",
        options: [
          "这是A",
          "这是B",
          "这是C",
          "这是D"
        ]
      }
    ],
    judgeItemGroup: [
      {
        _id: 1,
        title: "第一题",
        answer: "对"
      },
      {
        _id: 2,
        title: "第二题",
        answer: "错"
      },
    ],
    selectAnswers: [],
    judgeAnswers: [],
    // errorMessage: []
  },

  onSelectOptionChange(event) {
    let index = event.currentTarget.dataset.index
    let selectAnswers = this.data.selectAnswers
    selectAnswers[index] = event.detail
    this.setData({
      selectAnswers
    });
  },

  onJudgeOptionChange(event) {
    let index = event.currentTarget.dataset.index
    let judgeAnswers = this.data.judgeAnswers
    judgeAnswers[index] = event.detail
    this.setData({
      judgeAnswers
    });
  },

  handleSubmitAction(event) {
    // if (app.globalData.logged) {
    if (true) {
      if ((this.data.selectAnswers.length + this.data.judgeAnswers.length) != 20) {
        let totalNum = this.data.selectAnswers.length + this.data.judgeAnswers.length
        wx.showToast({
          title: `您共完成了${totalNum}道题目，还差${20 - totalNum}道题目未完成！`,
          icon: 'none'
        });
      } else {
        wx.showModal({
          title: '确认提交',
          content: '您已完成所有题目，确认提交吗？',
          showCancel: true,
          cancelText: '考虑一下',
          cancelColor: '#000000',
          confirmText: '确认提交',
          confirmColor: '#3871f5',
          success: (result) => {
            if (result.confirm) {
              wx.showToast({
                title: "提交成功",
                icon: 'none'
              });
            }
          }
        });
      }
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
    }
  },

  handleNavigate() {
    wx.navigateBack();
  }
});