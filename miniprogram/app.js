//app.js
const defaultTime = {

  defaultWorkTime: 25,

  defaultRestTime: 5

}
App({
  //全局数据
  globalData: {
    
    //用户ID
    userId: '',
    //用户信息
    userInfo: null,
    //授权状态
    auth: {
      'scope.userInfo': false
    },
    //登录状态
    logged: false,
    
  },



  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'test-ai65z'
      })
    }
    let workTime = wx.getStorageSync('workTime')

    let restTime = wx.getStorageSync('restTime')

    if (!workTime) {

      wx.setStorage({

        key: 'workTime',

        data: defaultTime.defaultWorkTime

      })

    }

    if (!restTime) {

      wx.setStorage({

        key: 'restTime',

        data: defaultTime.defaultRestTime

      })

    }
  }
})