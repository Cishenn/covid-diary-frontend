const app = getApp();

Page({
  data: {
    selectItemGroup: [
      {
        "_id": 1,
        "title": "新冠肺炎最早在哪个城市被发现？",
        "options": [
          "岳阳",
          "武汉",
          "广州",
          "北京"
        ],
        "answer": "B"
      },
      {
        "_id": 2,
        "title": "与新冠肺炎患者或疑似患者接触后需要隔离多少天？",
        "options": [
          "7天",
          "10天",
          "14天",
          "20天"
        ],
        "answer": "C"
      },
      {
        "_id": 3,
        "title": "哪些人群感染新型冠状病毒后更容易发生新冠肺炎？",
        "options": [
          "老年人",
          "有慢性基础疾病人群",
          "免疫力低下人群",
          "以上都是"
        ],
        "answer": "D"
      },
      {
        "_id": 4,
        "title": "新型冠状病毒感染后的轻型患者表现为",
        "options": [
          "仅表现为低热、轻微乏力等",
          "持续高热，但无咳嗽",
          "腹泻、寒颤、流鼻涕",
          "全身酸痛、呕吐"
        ],
        "answer": "A"
      },
      {
        "_id": 5,
        "title": "新型冠状病毒感染后潜伏期一般是多久？",
        "options": [
          "3～8天",
          "1～14天",
          "1～7天",
          "1～24天"
        ],
        "answer": "B"
      },
      {
        "_id": 6,
        "title": "预防新冠肺炎一般用什么洗手？",
        "options": [
          "肥皂",
          "含有酒精的洗手液",
          "流动的清水",
          "以上都可"
        ],
        "answer": "D"
      },
      {
        "_id": 7,
        "title": "1月12日，世界卫生组织（WHO）正式将造成武汉肺炎疫情的新型冠状病毒命名为",
        "options": [
          "2019-nCoV",
          "SARS-2019",
          "Cov-SARS",
          "WH2019-Cov"
        ],
        "answer": "A"
      },
      {
        "_id": 8,
        "title": "瓜果、蔬菜类可用什么消毒液浸泡消毒？",
        "options": [
          "30%～75%的酒精",
          "络合碘溶液",
          "0.2%～0.5%的过氧乙酸溶液",
          "1%的高锰酸钾溶液"
        ],
        "answer": "C"
      },
      {
        "_id": 9,
        "title": "健康人群使用后的口罩如何处置？",
        "options": [
          "属于干垃圾, 按照生活垃圾分类的要求处理即可",
          "属于污染垃圾，要焚烧",
          "要送医院处理",
          "以上都不正确"
        ],
        "answer": "A"
      },
      {
        "_id": 10,
        "title": "如果学校离你较近的地方有疑似病例，则佩戴的口罩如何处置？",
        "options": [
          "应该丢到学校的垃圾桶中",
          "应视作医疗废弃物，用黄色垃圾袋装好送到医院，严格按照医疗废弃物有关流程处理",
          "应该带回家，交父母处理",
          "自己准备一个袋子保存"
        ],
        "answer": "B"
      },
      {
        "_id": 11,
        "title": "咳嗽或打喷嚏时我们的正确做法是",
        "options": [
          "用手掌遮挡口或鼻腔",
          "要用纸巾或肘臂遮挡，勤洗手",
          "无需遮挡",
          "以上都不对"
        ],
        "answer": "B"
      },
      {
        "_id": 12,
        "title": "上学路程不远的话，最好选择如何去学校？",
        "options": [
          "步行",
          "出租车",
          "公交车",
          "地铁"
        ],
        "answer": "A"
      },
      {
        "_id": 13,
        "title": "室内地面如何进行清洁消毒？",
        "options": [
          "可用有效氯含量为500 mg/L的含氯消毒剂溶液擦拭",
          "可在地面喷洒90%的酒精",
          "用消过毒的拖把拖干净即可",
          "用肥皂水清洗干净"
        ],
        "answer": "A"
      },
      {
        "_id": 14,
        "title": "新冠肺炎按哪类传染病管理？",
        "options": [
          "甲类",
          "乙类",
          "丙类",
          "其他"
        ],
        "answer": "A"
      },
      {
        "_id": 15,
        "title": "疫情期间，学生在学校下列做法正确的是",
        "options": [
          "在学校附近一个相对安全的餐馆就餐",
          "自己外出买点生活必需品",
          "只在学校或家里就餐",
          "以上都不是"
        ],
        "answer": "C"
      },
      {
        "_id": 16,
        "title": "新冠肺炎属于哪类传染病？",
        "options": [
          "甲类",
          "乙类",
          "丙类",
          "其他"
        ],
        "answer": "B"
      },
      {
        "_id": 17,
        "title": "新型冠状病毒在人与人之间传播最主要的途径是",
        "options": [
          "呼吸道飞沫传播、接触传播",
          "空气传播、气溶胶传播",
          "粪口传播、血液传播",
          "消化道传播"
        ],
        "answer": "A"
      },
      {
        "_id": 18,
        "title": "佩戴N95或KN95口罩时，用双手捂住口罩两边，呼吸检查口罩是否漏气，如有漏气，应该如何做？",
        "options": [
          "可用胶布粘紧",
          "稍微有点漏气没关系，不影响使用",
          "立即更换新的，并重新检查",
          "以上都不是"
        ],
        "answer": "C"
      },
      {
        "_id": 19,
        "title": "之所以被称为冠状病毒，是因为",
        "options": [
          "病毒的头上戴了一顶皇冠",
          "该病毒电子显微镜下呈球形，表面有很多突起，看上去像王冠一样",
          "该病毒电子显微镜下呈鸡冠形",
          "以上都不是"
        ],
        "answer": "B"
      },
      {
        "_id": 20,
        "title": "教室内的课桌椅如何进行清洁消毒？",
        "options": [
          "可用有效氯含量为500 mg/L的含氯消毒剂溶液擦拭",
          "可在桌上喷洒90%的酒精",
          "用消过毒的抹布抹干净即可",
          "用肥皂水清洗干净"
        ],
        "answer": "A"
      },
      {
        "_id": 21,
        "title": "为了将双手各个部位洗干净，我们建议的洗手方法为",
        "options": [
          "六步洗手法",
          "七步洗手法",
          "八步洗手法",
          "整体洗手法"
        ],
        "answer": "B"
      },
      {
        "_id": 22,
        "title": "新冠肺炎采取哪类传染病的预防、控制措施？",
        "options": [
          "甲类",
          "乙类",
          "丙类",
          "其他"
        ],
        "answer": "A"
      },
      {
        "_id": 23,
        "title": "新冠病毒可通过包裹着病毒的飞沫进行传播，一般来说一个喷嚏会喷出1万个以上的飞沫，最远可以传达几米以外？",
        "options": [
          "3",
          "4",
          "6",
          "8"
        ],
        "answer": "D"
      },
      {
        "_id": 24,
        "title": "佩戴医用外科口罩时，我们应该注意的事项，下列哪项是错误的？",
        "options": [
          "应该分清楚口罩的内外、上下",
          "佩戴时深色面朝外",
          "用单手从鼻梁开始逐渐往外对称紧压两侧的金属条，使得口罩紧贴鼻梁",
          "向下拉伸口罩，使口罩不留褶皱，严密覆盖鼻子和嘴巴"
        ],
        "answer": "C"
      }
    ],
    judgeItemGroup: [
      {
        "_id": 1,
        "title": "新型冠状病毒会人传人，对吗？",
        "answer": "对"
      },
      {
        "_id": 2,
        "title": "口罩戴了一面后，可以反过来再戴一段时间，对吗？",
        "answer": "错"
      },
      {
        "_id": 3,
        "title": "佩戴多层口罩，才能有效预防病毒，对吗？",
        "answer": "错"
      },
      {
        "_id": 4,
        "title": "为了预防病毒感染，宿舍不能开窗，对吗？",
        "answer": "错"
      },
      {
        "_id": 5,
        "title": "佩戴医用口罩时，浅色朝外，金属条朝上，对吗？",
        "answer": "错"
      },
      {
        "_id": 6,
        "title": "新型冠状病毒感染后，大多数会发展至重型、危重型，所以很恐怖，对吗？",
        "answer": "错"
      },
      {
        "_id": 7,
        "title": "只有去过武汉，或者与武汉人接触后才可能感染新型冠状病毒，对吗？",
        "answer": "错"
      },
      {
        "_id": 8,
        "title": "目前近距离飞沫传播是新型冠状病毒的主要传播途径，对吗？",
        "answer": "对"
      },
      {
        "_id": 9,
        "title": "疫情期间，只要发热、咳嗽，很有可能就是感染了新型冠状病毒，对吗？",
        "answer": "错"
      }
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