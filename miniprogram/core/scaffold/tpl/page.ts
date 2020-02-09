Page({
  data: {
      container: {}, // 该变量不能删除，否则会导致很多异常情况
  },
  // 事件处理函数
  bindViewTap() {
  },
  onLoad() {
      // const app = getApp<IAppOption>();
      this.container = getApp<IAppOption>().globalData.container;
      this.container.init();  
  },
  onReady() {},
  onShow(){},
  onHide(){},
  onUnload(){},
})
