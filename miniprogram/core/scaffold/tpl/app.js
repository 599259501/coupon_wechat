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
var module_1 = require("{app_dir}/supports/promisify");
var module_2 = require("{app_dir}/helper");
var container_1 = require("../../container");
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
                        getSettingApi = module_1.promisify(wx.getSetting);
                        return [4, getSettingApi()];
                    case 1:
                        settingInfo = _a.sent();
                        if (!module_2.objectGet(settingInfo, 'authSetting', {})['scope.userInfo']) {
                            console.log("获取用户数据失败", settingInfo);
                        }
                        loginApi = module_1.promisify(wx.login);
                        return [4, loginApi()];
                    case 2:
                        loginRes = _a.sent();
                        console.log("code=", module_2.objectGet(loginRes, 'code', ""));
                        return [2];
                }
            });
        });
    },
    onError: function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("出现错误了,msg=", msg);
                return [2];
            });
        });
    },
    onShow: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("onShow");
                return [2];
            });
        });
    },
    onHide: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("onHide");
                return [2];
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsdURBQXVEO0FBQ3ZELDJDQUEyQztBQUUzQyw2Q0FBNkM7QUFFN0MsR0FBRyxDQUFhO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLElBQUkseUJBQWEsRUFBRTtLQUMvQjtJQUNLLFFBQVE7Ozs7Ozt3QkFFUixhQUFhLEdBQUcsa0JBQVMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzNCLFdBQU0sYUFBYSxFQUFFLEVBQUE7O3dCQUFuQyxXQUFXLEdBQUcsU0FBcUI7d0JBQ3ZDLElBQUksQ0FBQyxrQkFBUyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs0QkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBRXhDO3dCQUVHLFFBQVEsR0FBRyxrQkFBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEIsV0FBTSxRQUFRLEVBQUUsRUFBQTs7d0JBQTNCLFFBQVEsR0FBRyxTQUFnQjt3QkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsa0JBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBRXZEO0lBQ0ssT0FBTyxZQUFDLEdBQUc7OztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQzs7OztLQUNoQztJQUNLLE1BQU07OztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O0tBQ3ZCO0lBQ0ssTUFBTTs7O2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7S0FDdkI7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XG5pbXBvcnQge3Byb21pc2lmeX0gZnJvbSBge2FwcF9kaXJ9L3N1cHBvcnRzL3Byb21pc2lmeWA7XG5pbXBvcnQge29iamVjdEdldH0gZnJvbSBge2FwcF9kaXJ9L2hlbHBlcmA7XG4vL2ltcG9ydCB7UGFnZUNvbnRhaW5lcn0gZnJvbSBge2FwcF9kaXJ9L2NvcmUvY29udGFpbmVyYFxuaW1wb3J0IHtQYWdlQ29udGFpbmVyfSBmcm9tICcuLi8uLi9jb250YWluZXInXG5cbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHtcbiAgICBjb250YWluZXI6IG5ldyBQYWdlQ29udGFpbmVyKCksXG4gIH0sXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIGxldCBnZXRTZXR0aW5nQXBpID0gcHJvbWlzaWZ5KHd4LmdldFNldHRpbmcpO1xuICAgIGxldCBzZXR0aW5nSW5mbyA9IGF3YWl0IGdldFNldHRpbmdBcGkoKTtcbiAgICBpZiAoIW9iamVjdEdldChzZXR0aW5nSW5mbywgJ2F1dGhTZXR0aW5nJywge30pWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W55So5oi35pWw5o2u5aSx6LSlXCIsIHNldHRpbmdJbmZvKTtcbiAgICAgICAgLy90b2RvIOi/memHjOWwseimgeiuqeeUqOaIt+W8gOWQr+aOiOadg+adg+mZkCzlpoLmnpznlKjmiLfkuI3lkIzmhI/vvIzpgqPkuYjlsLHorqnku5bkuIDnm7TmjojmnYNcbiAgICB9XG5cbiAgICBsZXQgbG9naW5BcGkgPSBwcm9taXNpZnkod3gubG9naW4pO1xuICAgIGxldCBsb2dpblJlcyA9IGF3YWl0IGxvZ2luQXBpKCk7XG4gICAgY29uc29sZS5sb2coXCJjb2RlPVwiLCBvYmplY3RHZXQobG9naW5SZXMsICdjb2RlJywgXCJcIikpO1xuICAgIC8vIOW8gOWni+WQkeeZu+W9leS4muWKoeWQr+WKqOebuOWFs+eahOaOiOadg+S/oeaBr1xuICB9LFxuICBhc3luYyBvbkVycm9yKG1zZyl7XG4gICAgY29uc29sZS5sb2coXCLlh7rnjrDplJnor6/kuoYsbXNnPVwiLCBtc2cpO1xuICB9LFxuICBhc3luYyBvblNob3coKXtcbiAgICBjb25zb2xlLmxvZyhcIm9uU2hvd1wiKTtcbiAgfSxcbiAgYXN5bmMgb25IaWRlKCl7XG4gICAgY29uc29sZS5sb2coXCJvbkhpZGVcIik7XG4gIH1cbn0pIl19