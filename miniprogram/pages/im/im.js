const app = getApp()

Page({
  data: {
   
  },
  formBindsubmit: function (e) {
    this.setData({

      b:   e.detail.value.b,
      
    })
  },
  go(e){
    wx.navigateTo({
      url: '/pages/im/room/room?id='+e.currentTarget.dataset.id,
    })
  },
  
  
  onLoad: function (options) {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      })
    }


    console.group('数据库"实时数据推送"文档')
    console.log('https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/realtime.html')
    console.groupEnd()
  },
})
