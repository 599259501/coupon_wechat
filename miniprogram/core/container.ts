import middleware from  '../config/middleware';

export class PageContainer{
  currentPath: string;

  constructor() {
  }
  // 每次页面变化都重新初始化页面容器
  init():void{
    this.currentPath = this.getCurrentPath();
    this.loadMiddleware();
    // 加载每个页面特有的中间件
  }
  // 加载中间件
  loadMiddleware(){
    let middlewareList = middleware.middlewares;
    let middlewarePath = "../config/middlewares/";
    let _this = this;
    middlewareList.forEach(function(item: string){
      let middlewareCls = require(`${middlewarePath}${item}`)[item];
      console.log("middlewareCls=", `${middlewarePath}${item}`, middlewareCls);
      (new middlewareCls(_this)).handler();
      console.log("handler", item);
    });
  }
  // 获取当前的页面路径
  getCurrentPath():string{
    let pages = getCurrentPages();
    console.log("pages", pages);
    let currentPage = pages[pages.length-1];
    console.log("currentPage", currentPage);
    return `/${currentPage.route}`
  }
}

