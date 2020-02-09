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
var HttpClient = (function () {
    function HttpClient(domain) {
        this.domain = domain;
    }
    HttpClient.prototype.get = function (uri, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.request("get", uri, data)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HttpClient.prototype.post = function (uri, data, header) {
        if (data === void 0) { data = {}; }
        if (header === void 0) { header = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.request("post", uri, data, header)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HttpClient.prototype.request = function (method, uri, data, header) {
        if (data === void 0) { data = {}; }
        if (header === void 0) { header = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.domain + uri;
                        if (method == "get" && data) {
                            url += this.buildUrl(data);
                        }
                        if (!header || !header.hasOwnProperty('content-type')) {
                            header["content-type"] = "application/json";
                        }
                        return [4, wx.request({
                                url: url,
                                data: data,
                                header: header,
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HttpClient.prototype.buildUrl = function (data) {
        var url = "";
        for (var key in data) {
            var prefix = "";
            if (!url) {
                prefix = "&";
            }
            url += prefix + key + "=" + data[key];
        }
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVFLG9CQUFZLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVLLHdCQUFHLEdBQVQsVUFBVSxHQUFXLEVBQUMsSUFBWTs7Ozs0QkFDekIsV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUE7NEJBQTNDLFdBQU8sU0FBb0MsRUFBQTs7OztLQUM1QztJQUVJLHlCQUFJLEdBQVYsVUFBVyxHQUFXLEVBQUMsSUFBZSxFQUFDLE1BQWlCO1FBQWpDLHFCQUFBLEVBQUEsU0FBZTtRQUFDLHVCQUFBLEVBQUEsV0FBaUI7Ozs7NEJBQzlDLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsRUFBQTs0QkFBcEQsV0FBTyxTQUE2QyxFQUFBOzs7O0tBQ3JEO0lBRUssNEJBQU8sR0FBYixVQUFjLE1BQWMsRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFFLE1BQWE7UUFBM0IscUJBQUEsRUFBQSxTQUFZO1FBQUUsdUJBQUEsRUFBQSxXQUFhOzs7Ozs7d0JBQ2hFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzt3QkFDNUIsSUFBSSxNQUFNLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTs0QkFDekIsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7eUJBQzdCO3dCQUdELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFDOzRCQUNwRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsa0JBQWtCLENBQUM7eUJBQzdDO3dCQUVNLFdBQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQ0FDdEIsR0FBRyxFQUFFLEdBQUc7Z0NBQ1IsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsTUFBTSxFQUFFLE1BQU07NkJBQ2YsQ0FBQyxFQUFBOzRCQUpGLFdBQU8sU0FJTCxFQUFBOzs7O0tBQ0g7SUFFTyw2QkFBUSxHQUFoQixVQUFpQixJQUFTO1FBQ3hCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUNaLEtBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ25CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1IsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUNiO1lBQ0QsR0FBRyxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN0QztJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSHR0cENsaWVudHtcbiAgZG9tYWluOiBzdHJpbmdcbiAgY29uc3RydWN0b3IoZG9tYWluOiBzdHJpbmcpe1xuICAgIHRoaXMuZG9tYWluID0gZG9tYWluXG4gIH1cblxuICBhc3luYyBnZXQodXJpOiBzdHJpbmcsZGF0YTogT2JqZWN0KXtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KFwiZ2V0XCIsIHVyaSwgZGF0YSlcbiAgfVxuXG4gYXN5bmMgcG9zdCh1cmk6IHN0cmluZyxkYXRhOiBPYmplY3Q9e30saGVhZGVyOiBPYmplY3Q9e30pe1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoXCJwb3N0XCIsIHVyaSwgZGF0YSwgaGVhZGVyKVxuICB9XG5cbiAgYXN5bmMgcmVxdWVzdChtZXRob2Q6IHN0cmluZywgdXJpOiBzdHJpbmcsIGRhdGE6IGFueT17fSwgaGVhZGVyOmFueT17fSl7XG4gICAgbGV0IHVybCA9IHRoaXMuZG9tYWluICsgdXJpO1xuICAgIGlmIChtZXRob2QgPT0gXCJnZXRcIiAmJiBkYXRhKSB7XG4gICAgICAgIHVybCArPSB0aGlzLmJ1aWxkVXJsKGRhdGEpXG4gICAgfVxuXG4gICAgLy8g5aaC5p6caGVhZGVy5Li656m655qE6K+d5oiW6ICF5rKh5pyJ5oyH5a6a57G75Z6L6YO96buY6K6k5Li6anNvblxuICAgIGlmICghaGVhZGVyIHx8ICFoZWFkZXIuaGFzT3duUHJvcGVydHkoJ2NvbnRlbnQtdHlwZScpKXtcbiAgICAgIGhlYWRlcltcImNvbnRlbnQtdHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkVXJsKGRhdGE6IGFueSl7XG4gICAgbGV0IHVybCA9IFwiXCJcbiAgICBmb3IodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBsZXQgcHJlZml4ID0gXCJcIlxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcHJlZml4ID0gXCImXCJcbiAgICAgIH1cbiAgICAgIHVybCArPSBwcmVmaXggKyBrZXkgKyBcIj1cIiArIGRhdGFba2V5XVxuICAgIH1cbiAgfVxufSJdfQ==