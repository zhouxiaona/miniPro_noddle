//获取应用实例
const app = getApp()
// console.log(app.globalData);

Page({
  data:{
    showBtn:true,
    userInfo:{}
  },

  // 获取用户信息
  getuserinfo:function(e){
    console.log("点击我获取用户信息",e);
    console.log("点击我获取全局信息",app.globalData);
    e.detail.userInfo=app.globalData.userInfo;
    this.setData({
      userInfo:e.detail.userInfo,
      showBtn:false
    })
    console.log(this.data.userInfo);
  },

  // 进入电影、阅读页面
  nextPage:function(){
    wx.switchTab({
      url: '/pages/firstPage/firstPage',
    })
  }
})