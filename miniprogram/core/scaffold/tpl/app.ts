// app.ts
import regeneratorRuntime from 'regenerator-runtime';
import {promisify} from `{app_dir}/supports/promisify`;
import {objectGet} from `{app_dir}/helper`;
//import {PageContainer} from `{app_dir}/core/container`
import {PageContainer} from '../../container'

App<IAppOption>({
  globalData: {
    container: new PageContainer(),
  },
  async onLaunch() {
    // 获取用户信息
    let getSettingApi = promisify(wx.getSetting);
    let settingInfo = await getSettingApi();
    if (!objectGet(settingInfo, 'authSetting', {})['scope.userInfo']) {
        console.log("获取用户数据失败", settingInfo);
        //todo 这里就要让用户开启授权权限,如果用户不同意，那么就让他一直授权
    }

    let loginApi = promisify(wx.login);
    let loginRes = await loginApi();
    console.log("code=", objectGet(loginRes, 'code', ""));
    // 开始向登录业务启动相关的授权信息
  },
  async onError(msg){
    console.log("出现错误了,msg=", msg);
  },
  async onShow(){
    console.log("onShow");
  },
  async onHide(){
    console.log("onHide");
  }
})