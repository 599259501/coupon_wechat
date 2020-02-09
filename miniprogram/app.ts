// app.ts
import regeneratorRuntime from 'regenerator-runtime';
import {promisify} from './core/supports/promisify';
import {objectGet} from './core/helper';
import {PageContainer} from './core/container';

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
  async onError(){

  }
})