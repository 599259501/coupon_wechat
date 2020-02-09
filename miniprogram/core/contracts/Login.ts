export interface ILogin{
  login(): any;
  saveSession(userInfo: any): void;
  isLogin():boolean;
}