"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = require("../config/middleware");
var PageContainer = (function () {
    function PageContainer() {
    }
    PageContainer.prototype.init = function () {
        this.currentPath = this.getCurrentPath();
        this.loadMiddleware();
    };
    PageContainer.prototype.loadMiddleware = function () {
        var middlewareList = middleware_1.default.middlewares;
        var middlewarePath = "../config/middlewares/";
        var _this = this;
        middlewareList.forEach(function (item) {
            var middlewareCls = require("" + middlewarePath + item)[item];
            console.log("middlewareCls=", "" + middlewarePath + item, middlewareCls);
            (new middlewareCls(_this)).handler();
            console.log("handler", item);
        });
    };
    PageContainer.prototype.getCurrentPath = function () {
        var pages = getCurrentPages();
        console.log("pages", pages);
        var currentPage = pages[pages.length - 1];
        console.log("currentPage", currentPage);
        return "/" + currentPage.route;
    };
    return PageContainer;
}());
exports.PageContainer = PageContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQStDO0FBRS9DO0lBR0U7SUFDQSxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUV4QixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNFLElBQUksY0FBYyxHQUFHLG9CQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksY0FBYyxHQUFHLHdCQUF3QixDQUFDO1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBWTtZQUMxQyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsS0FBRyxjQUFjLEdBQUcsSUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFHLGNBQWMsR0FBRyxJQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDekUsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDRSxJQUFJLEtBQUssR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4QyxPQUFPLE1BQUksV0FBVyxDQUFDLEtBQU8sQ0FBQTtJQUNoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAgJy4uL2NvbmZpZy9taWRkbGV3YXJlJztcblxuZXhwb3J0IGNsYXNzIFBhZ2VDb250YWluZXJ7XG4gIGN1cnJlbnRQYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgLy8g5q+P5qyh6aG16Z2i5Y+Y5YyW6YO96YeN5paw5Yid5aeL5YyW6aG16Z2i5a655ZmoXG4gIGluaXQoKTp2b2lke1xuICAgIHRoaXMuY3VycmVudFBhdGggPSB0aGlzLmdldEN1cnJlbnRQYXRoKCk7XG4gICAgdGhpcy5sb2FkTWlkZGxld2FyZSgpO1xuICAgIC8vIOWKoOi9veavj+S4qumhtemdoueJueacieeahOS4remXtOS7tlxuICB9XG4gIC8vIOWKoOi9veS4remXtOS7tlxuICBsb2FkTWlkZGxld2FyZSgpe1xuICAgIGxldCBtaWRkbGV3YXJlTGlzdCA9IG1pZGRsZXdhcmUubWlkZGxld2FyZXM7XG4gICAgbGV0IG1pZGRsZXdhcmVQYXRoID0gXCIuLi9jb25maWcvbWlkZGxld2FyZXMvXCI7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBtaWRkbGV3YXJlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW06IHN0cmluZyl7XG4gICAgICBsZXQgbWlkZGxld2FyZUNscyA9IHJlcXVpcmUoYCR7bWlkZGxld2FyZVBhdGh9JHtpdGVtfWApW2l0ZW1dO1xuICAgICAgY29uc29sZS5sb2coXCJtaWRkbGV3YXJlQ2xzPVwiLCBgJHttaWRkbGV3YXJlUGF0aH0ke2l0ZW19YCwgbWlkZGxld2FyZUNscyk7XG4gICAgICAobmV3IG1pZGRsZXdhcmVDbHMoX3RoaXMpKS5oYW5kbGVyKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImhhbmRsZXJcIiwgaXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgLy8g6I635Y+W5b2T5YmN55qE6aG16Z2i6Lev5b6EXG4gIGdldEN1cnJlbnRQYXRoKCk6c3RyaW5ne1xuICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgIGNvbnNvbGUubG9nKFwicGFnZXNcIiwgcGFnZXMpO1xuICAgIGxldCBjdXJyZW50UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aC0xXTtcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRQYWdlXCIsIGN1cnJlbnRQYWdlKTtcbiAgICByZXR1cm4gYC8ke2N1cnJlbnRQYWdlLnJvdXRlfWBcbiAgfVxufVxuXG4iXX0=