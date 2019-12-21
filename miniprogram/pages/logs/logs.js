// miniprogram/pages/logs.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    e:'学习进度',

    b: '1:',
    c: '2:',
    d: '3:',

    index: 0


  },
  formReset: function () {
    this.setData({


      b: '1:',
      c: '2:',
      d: '3:',

      index: 0
    })
  },

  formBindsubmit: function (e) {
    this.setData({

      b: '1:' + e.detail.value.b,
      c: '2:' + e.detail.value.c,
      d: '3:' + e.detail.value.d
    })
  },
  changeTabbar(e) {
    this.setData({ index: e.currentTarget.dataset.id })
  },
  onTapDayWeather() {
    wx.navigateTo({
      url: '/pages/im/im',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})