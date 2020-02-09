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
var helper_1 = require("../helper");
var request_1 = require("./request");
var promisify_1 = require("../supports/promisify");
var Login = (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var code, httpClient, result;
            return __generator(this, function (_a) {
                code = this.getCode();
                httpClient = new request_1.HttpClient("");
                result = httpClient.post("/wx_login", {
                    code: code
                });
                this.saveSession(result);
                return [2, true];
            });
        });
    };
    Login.prototype.saveSession = function (userInfo) {
        console.log(userInfo);
    };
    Login.prototype.isLogin = function () {
        return true;
    };
    Login.prototype.getCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginApi, loginInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginApi = promisify_1.promisify(wx.login);
                        return [4, loginApi()];
                    case 1:
                        loginInfo = _a.sent();
                        if (!loginInfo || !loginInfo.hasOwnProperty("code")) {
                            helper_1.exceptionAbort(500, "login fail", {
                                "err": "code get fail"
                            });
                        }
                        return [2, loginInfo.code];
                }
            });
        });
    };
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9DQUEwQztBQUMxQyxxQ0FBcUM7QUFDckMsbURBQWdEO0FBR2hEO0lBQUE7SUErQkEsQ0FBQztJQTlCTyxxQkFBSyxHQUFYOzs7O2dCQUNNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLFVBQVUsR0FBRyxJQUFJLG9CQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDeEMsSUFBSSxNQUFBO2lCQUNMLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixXQUFPLElBQUksRUFBQzs7O0tBQ2I7SUFFRCwyQkFBVyxHQUFYLFVBQVksUUFBYTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVLLHVCQUFPLEdBQWI7Ozs7Ozt3QkFDTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25CLFdBQU0sUUFBUSxFQUFFLEVBQUE7O3dCQUE1QixTQUFTLEdBQUcsU0FBZ0I7d0JBQ2hDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUNuRCx1QkFBYyxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUU7Z0NBQ2hDLEtBQUssRUFBRSxlQUFlOzZCQUN2QixDQUFDLENBQUM7eUJBQ0o7d0JBRUQsV0FBTyxTQUFTLENBQUMsSUFBSSxFQUFDOzs7O0tBQ3ZCO0lBQ0gsWUFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lMb2dpbn0gZnJvbSAnLi4vY29udHJhY3RzL0xvZ2luJztcbmltcG9ydCB7ZXhjZXB0aW9uQWJvcnR9ICBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IHtwcm9taXNpZnl9IGZyb20gJy4uL3N1cHBvcnRzL3Byb21pc2lmeSc7XG5cblxuZXhwb3J0IGNsYXNzIExvZ2luIGltcGxlbWVudHMgSUxvZ2lue1xuICBhc3luYyBsb2dpbigpe1xuICAgIGxldCBjb2RlID0gdGhpcy5nZXRDb2RlKCk7XG4gICAgbGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudChcIlwiKTtcbiAgICBsZXQgcmVzdWx0ID0gaHR0cENsaWVudC5wb3N0KFwiL3d4X2xvZ2luXCIsIHtcbiAgICAgIGNvZGVcbiAgICB9KTtcblxuICAgIHRoaXMuc2F2ZVNlc3Npb24ocmVzdWx0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNhdmVTZXNzaW9uKHVzZXJJbmZvOiBhbnkpOiB2b2lke1xuICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKTtcbiAgfVxuXG4gIGlzTG9naW4oKTogYm9vbGVhbntcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q29kZSgpIHtcbiAgICBsZXQgbG9naW5BcGkgPSBwcm9taXNpZnkod3gubG9naW4pO1xuICAgIGxldCBsb2dpbkluZm8gPSBhd2FpdCBsb2dpbkFwaSgpO1xuICAgIGlmICghbG9naW5JbmZvIHx8ICFsb2dpbkluZm8uaGFzT3duUHJvcGVydHkoXCJjb2RlXCIpKSB7XG4gICAgICBleGNlcHRpb25BYm9ydCg1MDAsIFwibG9naW4gZmFpbFwiLCB7XG4gICAgICAgIFwiZXJyXCI6IFwiY29kZSBnZXQgZmFpbFwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9naW5JbmZvLmNvZGU7XG4gIH1cbn0iXX0=