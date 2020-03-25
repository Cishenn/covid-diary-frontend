const DEFAULT_PAGE = 0;

Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    imageList: [
      {
        id: 1,
        image_name: "幸得有你，山河无恙，人间结安",
        image_src: "/images/card_image1.jpg"
      },
      {
        id: 2,
        image_name: "谢谢你们，护我周全",
        image_src: "/images/card_image2.jpg"
      },
      {
        id: 3,
        image_name: "我们都是平凡人，却有白衣天使为生命逆行",
        image_src: "/images/card_image3.jpg"
      },
      {
        id: 4,
        image_name: "我们都是平凡人，却有白衣天使为生命逆行",
        image_src: "/images/card_image4.jpg"
      },
      // {
      //   id: 5,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image5.jpg"
      // },
      // {
      //   id: 6,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image6.jpg"
      // },
      // {
      //   id: 7,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image7.jpg"
      // },
      // {
      //   id: 8,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image8.jpg"
      // },
      // {
      //   id: 9,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image9.jpg"
      // },
      // {
      //   id: 10,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image10.jpg"
      // },
      // {
      //   id: 11,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image11.jpg"
      // },
      // {
      //   id: 12,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image12.jpg"
      // },
      // {
      //   id: 13,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image13.jpg"
      // },
      // {
      //   id: 14,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image14.jpg"
      // },
      // {
      //   id: 15,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image15.jpg"
      // },
      // {
      //   id: 16,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image16.jpg"
      // },
      // {
      //   id: 17,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image17.jpg"
      // },
      // {
      //   id: 18,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image18.jpg"
      // },
      // {
      //   id: 19,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image19.jpg"
      // },
      // {
      //   id: 20,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image20.jpg"
      // },
      // {
      //   id: 21,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image21.jpg"
      // },
      // {
      //   id: 22,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image22.jpg"
      // },
      // {
      //   id: 23,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image23.jpg"
      // },
      // {
      //   id: 24,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image24.jpg"
      // },
      // {
      //   id: 25,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image25.jpg"
      // },
      // {
      //   id: 26,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image26.jpg"
      // },
      // {
      //   id: 27,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image27.jpg"
      // },
      // {
      //   id: 28,
      //   image_name: "我们都是平凡人，却有白衣天使为生命逆行",
      //   image_src: "/images/card_image28.jpg"
      // },
    ]
  },

  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.imageList.length - 1;
    if (Math.abs(moveX) >= 100) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },

  handleNavigate() {
    wx.navigateBack();
  }
})