Page({
  data: {
    ne:[]
  },
 listenSwiper: function (e) {
    //打印信息
    console.log(e)
  },
 onLoad: function (options) {
   var that=this;
   const db=wx.cloud.database({
     env:'test-ai65z'
   })
   db.collection('hello').get({
     success:res=>{
       console.log(res.data)
       this.setData({
         ne:res.data
       })
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
  bianji:function(){
    wx.navigateTo({
      url: '../bianji/bianji',
    })
  },
  shuaxin:function(){
    if (getCurrentPages().length != 0) {
      getCurrentPages()[getCurrentPages().length - 1].onLoad()
    }
  }
//   yulan:function(){
   
//       var imgUrl = this.data.imgUrl; 
//       wx.previewImage({
//         urls: [imgUrl], //需要预览的图片http链接列表，注意是数组   
//          current: '', // 当前显示图片的http链接，默认是第一个    
//          success: function (res) { },   
//         fail: function (res) { },   
//          complete: function (res) { },  })}
        
  
})
