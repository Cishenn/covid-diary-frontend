Page({
  data: {
    activeName: '1',
    active: 0,
    tips_data: []
  },

  onLoad(options) {
    wx.showLoading({
      title: "玩命加载中",
      mask: false
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/数据文档/tips_data.json',
      success: res => {
        const FileSystemManager = wx.getFileSystemManager()
        FileSystemManager.readFile({
          filePath: res.tempFilePath,
          encoding: "utf-8",
          success: res => {
            this.setData({
              tips_data: JSON.parse(res.data)
            })
            wx.hideLoading();
          }
        })
      },
      fail: err => {
        // handle error
      }
    })
  },

  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },

  handleNavigate() {
    wx.navigateBack();
  }
});