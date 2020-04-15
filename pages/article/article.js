const app = getApp()
const plugin = requirePlugin("WechatSI")
const backgroundAudioManager = wx.getBackgroundAudioManager()

Page({
  data: {
    article: null,
    articleText: "",
    articleContent: "",
    activeNames: ["1"],
    floorstatus: false,
    playstatus: false
  },

  onLoad(options) {
    const _id = parseInt(options._id)
    wx.showLoading({
      title: "玩命加载中",
      mask: true
    });
    if (options.hasOwnProperty("_id")) {
      wx.cloud.callFunction({
        name: 'getArticleAPI',
        data: {
          _ids: [_id]
        }
      }).then(res => {
        let article = res.result[0]
        wx.cloud.callFunction({
          name: 'incrArticleViewNumAPI',
          data: {
            _id
          }
        }).then(res => {
          article.view_num = res.result
          wx.cloud.downloadFile({
            fileID: article.content
          }).then(res => {
            const FileSystemManager = wx.getFileSystemManager()
            FileSystemManager.readFile({
              filePath: res.tempFilePath,
              encoding: "utf-8",
              success: res => {
                this.setData({
                  article,
                  articleText: res.data,
                  articleContent: app.towxml(res.data, 'markdown')
                })
                wx.hideLoading();
              }
            })
          })
        })
      })
    }
  },

  handleNavigate() {
    backgroundAudioManager.stop()
    wx.navigateBack();
  },

  onCollapseChange(event) {
    this.setData({
      activeNames: event.detail
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

  handleTextToSpeech(event) {
    this.setData({
      playstatus: !this.data.playstatus
    })
    if (this.data.playstatus) {
      let text = this.data.articleText.replace(/([#\s]|[*])/g, "").substring(0, 250)
      plugin.textToSpeech({
        lang: "zh_CN",
        tts: true,
        content: text,
        success: res => {
          backgroundAudioManager.title = this.data.article.title
          backgroundAudioManager.coverImgUrl = this.data.article.bg_image
          backgroundAudioManager.src = res.filename
          backgroundAudioManager.play()
        },
        fail: function (res) {
          wx.showToast({
            title: '播放失败',
            icon: 'none'
          });
        }
      })
    } else {
      backgroundAudioManager.pause()
    }
  }
});