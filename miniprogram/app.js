"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promisify_1 = require("./core/supports/promisify");
var helper_1 = require("./core/helper");
var container_1 = require("./core/container");
App({
    globalData: {
        container: new container_1.PageContainer(),
    },
    onLaunch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var getSettingApi, settingInfo, loginApi, loginRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getSettingApi = promisify_1.promisify(wx.getSetting);
                        return [4, getSettingApi()];
                    case 1:
                        settingInfo = _a.sent();
                        if (!helper_1.objectGet(settingInfo, 'authSetting', {})['scope.userInfo']) {
                            console.log("获取用户数据失败", settingInfo);
                        }
                        loginApi = promisify_1.promisify(wx.login);
                        return [4, loginApi()];
                    case 2:
                        loginRes = _a.sent();
                        console.log("code=", helper_1.objectGet(loginRes, 'code', ""));
                        return [2];
                }
            });
        });
    },
    onError: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsdURBQW9EO0FBQ3BELHdDQUF3QztBQUN4Qyw4Q0FBK0M7QUFFL0MsR0FBRyxDQUFhO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLElBQUkseUJBQWEsRUFBRTtLQUMvQjtJQUNLLFFBQVE7Ozs7Ozt3QkFFUixhQUFhLEdBQUcscUJBQVMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzNCLFdBQU0sYUFBYSxFQUFFLEVBQUE7O3dCQUFuQyxXQUFXLEdBQUcsU0FBcUI7d0JBQ3ZDLElBQUksQ0FBQyxrQkFBUyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs0QkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBRXhDO3dCQUVHLFFBQVEsR0FBRyxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEIsV0FBTSxRQUFRLEVBQUUsRUFBQTs7d0JBQTNCLFFBQVEsR0FBRyxTQUFnQjt3QkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsa0JBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBRXZEO0lBQ0ssT0FBTzs7Ozs7O0tBRVo7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XG5pbXBvcnQge3Byb21pc2lmeX0gZnJvbSAnLi9jb3JlL3N1cHBvcnRzL3Byb21pc2lmeSc7XG5pbXBvcnQge29iamVjdEdldH0gZnJvbSAnLi9jb3JlL2hlbHBlcic7XG5pbXBvcnQge1BhZ2VDb250YWluZXJ9IGZyb20gJy4vY29yZS9jb250YWluZXInO1xuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7XG4gICAgY29udGFpbmVyOiBuZXcgUGFnZUNvbnRhaW5lcigpLFxuICB9LFxuICBhc3luYyBvbkxhdW5jaCgpIHtcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICBsZXQgZ2V0U2V0dGluZ0FwaSA9IHByb21pc2lmeSh3eC5nZXRTZXR0aW5nKTtcbiAgICBsZXQgc2V0dGluZ0luZm8gPSBhd2FpdCBnZXRTZXR0aW5nQXBpKCk7XG4gICAgaWYgKCFvYmplY3RHZXQoc2V0dGluZ0luZm8sICdhdXRoU2V0dGluZycsIHt9KVsnc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPlueUqOaIt+aVsOaNruWksei0pVwiLCBzZXR0aW5nSW5mbyk7XG4gICAgICAgIC8vdG9kbyDov5nph4zlsLHopoHorqnnlKjmiLflvIDlkK/mjojmnYPmnYPpmZAs5aaC5p6c55So5oi35LiN5ZCM5oSP77yM6YKj5LmI5bCx6K6p5LuW5LiA55u05o6I5p2DXG4gICAgfVxuXG4gICAgbGV0IGxvZ2luQXBpID0gcHJvbWlzaWZ5KHd4LmxvZ2luKTtcbiAgICBsZXQgbG9naW5SZXMgPSBhd2FpdCBsb2dpbkFwaSgpO1xuICAgIGNvbnNvbGUubG9nKFwiY29kZT1cIiwgb2JqZWN0R2V0KGxvZ2luUmVzLCAnY29kZScsIFwiXCIpKTtcbiAgICAvLyDlvIDlp4vlkJHnmbvlvZXkuJrliqHlkK/liqjnm7jlhbPnmoTmjojmnYPkv6Hmga9cbiAgfSxcbiAgYXN5bmMgb25FcnJvcigpe1xuXG4gIH1cbn0pIl19