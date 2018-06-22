//index.js
//获取应用实例

var dataList=require("../../data/post-data.js");
Page({
  data: {
    imgUrls: [
      '/images/iqiyi.png',
      '/images/vr.png',
      '/images/wx.png'
    ],
    dataList:[],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  onLoad:function(options){
    this.setData({
      dataList:dataList.postList
    })
  },
  gotoDetail:function(event){
    console.log(event);
    var postid=event.currentTarget.dataset.postid;
    wx.navigateTo({
      url:"/pages/articleDetail/articleDetail?postid="+postid,
    })
  }
  


  

  
})