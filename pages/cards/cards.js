const DEFAULT_PAGE = 0;

Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    imageList: [
      {
        id: 1,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/1.jpg"
      },
      {
        id: 2,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/2.jpg"
      },
      {
        id: 3,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/3.jpg"
      },
      {
        id: 4,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/4.jpg"
      },
      {
        id: 5,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/5.jpg"
      },
      {
        id: 6,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/6.jpg"
      },
      {
        id: 7,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/7.jpg"
      },
      {
        id: 8,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/8.jpg"
      },
      {
        id: 9,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/9.jpg"
      },
      {
        id: 10,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/10.jpg"
      },
      {
        id: 11,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/11.jpg"
      },
      {
        id: 12,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/12.jpg"
      },
      {
        id: 13,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/13.jpg"
      },
      {
        id: 14,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/14.jpg"
      },
      {
        id: 15,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/15.jpg"
      },
      {
        id: 16,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/16.jpg"
      },
      {
        id: 17,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/17.jpg"
      },
      {
        id: 18,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/18.jpg"
      },
      {
        id: 19,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/19.jpg"
      },
      {
        id: 20,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/20.jpg"
      },
      {
        id: 21,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/21.jpg"
      },
      {
        id: 22,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/22.jpg"
      },
      {
        id: 23,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/23.jpg"
      },
      {
        id: 24,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/24.jpg"
      },
      {
        id: 25,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/25.jpg"
      },
      {
        id: 26,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/26.jpg"
      },
      {
        id: 27,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/27.jpg"
      },
      {
        id: 28,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/28.jpg"
      },
      {
        id: 29,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/29.jpg"
      },
      {
        id: 30,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/30.jpg"
      },
      {
        id: 31,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/31.jpg"
      },
      {
        id: 32,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/32.jpg"
      },
      {
        id: 33,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/33.jpg"
      },
      {
        id: 34,
        image_src: "cloud://covid-diary-08myr.636f-covid-diary-08myr-1301602611/32张感恩海报/34.jpg"
      }
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
  },
})