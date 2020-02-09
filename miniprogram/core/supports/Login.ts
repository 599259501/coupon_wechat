import {ILogin} from '../contracts/Login';
import {exceptionAbort}  from '../helper';
import {HttpClient} from './request';
import {promisify} from '../supports/promisify';


export class Login implements ILogin{
  async login(){
    let code = this.getCode();
    let httpClient = new HttpClient("");
    let result = httpClient.post("/wx_login", {
      code
    });

    this.saveSession(result);
    return true;
  }

  saveSession(userInfo: any): void{
    console.log(userInfo);
  }

  isLogin(): boolean{
      return true;
  }

  async getCode() {
    let loginApi = promisify(wx.login);
    let loginInfo = await loginApi();
    if (!loginInfo || !loginInfo.hasOwnProperty("code")) {
      exceptionAbort(500, "login fail", {
        "err": "code get fail"
      });
    }

    return loginInfo.code;
  }
}