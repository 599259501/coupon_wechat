"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = function (api) {
    return function (options) {
        if (options === void 0) { options = []; }
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            api.apply(void 0, __spreadArrays([Object.assign({}, options, { success: resolve, fail: reject })], params));
        });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzaWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvbWlzaWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNhLFFBQUEsU0FBUyxHQUFHLFVBQUMsR0FBUTtJQUM5QixPQUFPLFVBQUMsT0FBYztRQUFkLHdCQUFBLEVBQUEsWUFBYztRQUFFLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsK0JBQWdCOztRQUNwQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsR0FBRywrQkFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFLLE1BQU0sR0FBRTtRQUNuRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFR5cGVTY3JpcHQgZmlsZVxuZXhwb3J0IGNvbnN0IHByb21pc2lmeSA9IChhcGk6IGFueSk6YW55ID0+IHtcbiAgICByZXR1cm4gKG9wdGlvbnM6YW55PVtdLCAuLi5wYXJhbXM6IGFueVtdKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBhcGkoT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBzdWNjZXNzOiByZXNvbHZlLCBmYWlsOiByZWplY3QgfSksIC4uLnBhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=