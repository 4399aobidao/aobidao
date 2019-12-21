// pages/my/my.js
var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {

      avatarUrl: "",//用户头像

      nickName: "",//用户昵称

      gender:"",

      province:"",

      city:"",

      daojishi:"倒计时"

    }

  },
  add_address_fun: function () {

    wx.navigateTo({

      url: 'add_address/add_address',

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
    var that = this;    /**     * 获取用户信息     */   
     wx.getUserInfo({ 
       success: function (res) { 
         console.log(res); 
         var avatarUrl = 'userInfo.avatarUrl';
         var nickName = 'userInfo.nickName';
         var gender = "userInfo.gender" // 性别 0：未知、1：男、2：女

         var province = "userInfo.province"  //用户国家  

         var city = "userInfo.city"
           that.setData({
              [avatarUrl]:
            res.userInfo.avatarUrl, 
              [nickName]: res.userInfo.nickName,
              [gender]:
               res.userInfo.gender,
              [province]:
               res.userInfo.provincel,
              [city]:
               res.userInfo.city,        })
       }
     })
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