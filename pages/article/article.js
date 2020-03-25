Page({
  data: {
    activeNames: [],
    content: "<h1>hello</h1>"
  },

  onCollapseChange(event) {
    this.setData({
      activeNames: event.detail
    });
  }
});