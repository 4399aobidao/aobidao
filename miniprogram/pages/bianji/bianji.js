var app = getApp()
const db = wx.cloud.database()
const _ = db.command;
var tcount=4;
Page({
  data: {
    huoqutupian: " /images/tianjia.png ",
    // huoqutupian2:null,
    show_input: '',
    text: '',
    img_url: '',
    count: 0,
    avatarUrl: "",
    nickName: "",
    



  },

  onLoad: function (options) {
    this.getCount()
    var that = this; 
       /**     * 获取用户信息     */    
    wx.getUserInfo({
       success: function (res) { 
         console.log(res); 
         var avatarUrl = 'userInfo.avatarUrl'; 
         var nickName = 'userInfo.nickName'; 
         that.setData({ 
           [avatarUrl]: res.userInfo.avatarUrl, 
           [nickName]: res.userInfo.nickName, }) 
           } 
        })


  },


  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  },



  submitFunc: function (e) {
    this.setData({
      
    })
  },
  chooseimage:function(){
    var that = this;
    wx.chooseImage({
      success: function(res) {
        // const tempFilePaths=res.tempFilePaths
        const filePath = res.tempFilePaths[0]
        // console.log(res.tempFilePaths)
        that.setData({
          imgUrl: filePath
        })

        const cloudPath = tcount + filePath.match(/\.[^.]+?$/)[0]


        console.log(cloudPath)
        // filePath.forEach((item, i) => {
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: res => {
              console.log('[上传文件] 成功：', cloudPath, res)

              app.globalData.fileID = res.fileID
              app.globalData.cloudPath = cloudPath
              app.globalData.imagePath = filePath
              

            }
          })
        // } ) 
      },
      count: 1,
      sizeType: ['original','compressed'],
      sourceType: ['album', 'camera']
      
    })
  },
  input:function(e){
    this.setData({
      text:e.detail.value
      // console.log(content)
    })
  },
  getCount:function(){
    var that=this
    db.collection('hello').count({
      success:res=>{
        count:Number(res.total)+1
      }
    })
  },
  send:function(){
    var that = this;
    
    var data={
      image:new  Array(app.globalData.fileID),
      // image:fileID,
      content: this.data.text,
      
      avatar: this.data.userInfo.avatarUrl,
      nickName: this.data.userInfo.nickName,
      // id: Number(this.data.count) + 1,
        }

    if (data.content) {
      db.collection('hello').add({
        data: data,
      success: res => {
        
          wx.showToast({
            title: '发布成功',
            
          })
          setTimeout(() => {

            wx.switchTab({
              url: '../communicate/communicate',
            })
          }, 1000)
        tcount=tcount+1
        }
      })
    }

  }
    
  
  



})  