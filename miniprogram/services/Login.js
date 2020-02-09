"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ILogin = require('../contracts/Login');
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.login = function (code) {
    };
    Login.prototype.saveSession = function (userInfo) {
    };
    Login.prototype.isLogin = function () {
    };
    return Login;
}(ILogin));
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU3QztJQUEyQix5QkFBTTtJQUFqQzs7SUFVQSxDQUFDO0lBVEMscUJBQUssR0FBTCxVQUFNLElBQVk7SUFFbEIsQ0FBQztJQUNELDJCQUFXLEdBQVgsVUFBWSxRQUFhO0lBRXpCLENBQUM7SUFDRCx1QkFBTyxHQUFQO0lBRUEsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBMkIsTUFBTSxHQVVoQztBQVZZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSUxvZ2luID0gcmVxdWlyZSgnLi4vY29udHJhY3RzL0xvZ2luJyk7XG5cbmV4cG9ydCBjbGFzcyBMb2dpbiBleHRlbmRzIElMb2dpbiB7XG4gIGxvZ2luKGNvZGU6IHN0cmluZyk6IGFueXtcbiAgICBcbiAgfVxuICBzYXZlU2Vzc2lvbih1c2VySW5mbzogYW55KTogdm9pZHtcblxuICB9XG4gIGlzTG9naW4oKTogYm9vbGVhbntcblxuICB9XG59Il19