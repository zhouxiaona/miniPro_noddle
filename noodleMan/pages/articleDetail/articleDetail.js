// pages/articleDetail/articleDetail.js
var postList=require("../../data/post-data.js");
var app=getApp();
console.log("app是?",app);
console.log("postList是？",postList);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    postid:-1,
    musicImgUrl:"/images/music/music-start.png",
    isPlay:false,
    isCollected:false,
    collectionUrl: "/images/icon/collection-anti.png"
  },
  musicController:function(){
    this.setData({isPlay:!this.data.isPlay});
    // 当点击的时候赋值给全局
    app.globalData.isPlay=this.data.isPlay;
    app.globalData.postId=this.data.postid;

    if(this.data.isPlay){
      // 播放音乐
      wx.playBackgroundAudio({
        dataUrl: this.data.dataList.musicUrl,
        title:this.data.dataList.musicTitle,
        coverImgUrl:this.data.dataList.musicImg
      })
    }else{
      // 暂停播放
      this.setData({musicImgUrl:'/images/music/music-start.png'});
      wx.pauseBackgroundAudio();
    }
  },
  collectionAction:function(){
    wx.showModal({
      title: this.data.isCollected ? '确定取消收藏?' :'确认收藏?',
      content: '',
      success: (res) =>{
        if (res.confirm) {
          console.log('用户点击确定');
          // var status=wx.getStorageSync('collectioned');
          this.setData({ isCollected: !this.data.isCollected});

          if (this.data.isCollected) {
            //已经收藏
            this.setData({ collectionUrl: "/images/icon/collection.png" });
            wx.setStorageSync("collectioned", true);
          } else {
            //没有收藏
            this.setData({ collectionUrl: "/images/icon/collection-anti.png" });
            wx.setStorageSync("collectioned", false);
          }
          
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });


  },
  shareAction:function(){
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到微博', '分享到QQ'],
      success: function (res) {
        //tapIndex 点击选项的下标值
        console.log(res.tapIndex)
      },
      fail: function (res) {
        //点击取消时执行
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.postid);

    this.setData({
      postid:options.postid,
      dataList:postList.postList[options.postid]
    })

    var status = wx.getStorageSync("collectioned");
    
    if(status===""){
      //没有缓存
      this.setData({collectionUrl:"/images/icon/collection-anti.png"});
    }else{
      this.setData({"isCollected":status});
      if(status){
        this.setData({collectionUrl:"/images/icon/collection.png"});
      }else{
        this.setData({collectionUrl:"/images/icon/collection-anti.png"});
      }
    }

    // 监控音乐播放器的概念
    wx.onBackgroundAudioPlay(()=>{
      this.setData({isPlay:true});
      console.log("开始播放");
      this.setData( {musicImgUrl:'/images/music/music-stop.png'});
    });
    wx.onBackgroundAudioPause(()=>{
      this.setData({isPlay:false});
      console.log("被暂停了");
      this.setData({musicImgUrl:'/images/music/music-start.png'});
    });
    // 判断本条数据是否在播放
    if(app.globalData.postId==this.data.postid){
      //证明回退之后进入的是同一个页面
      this.setData({isPlay:app.globalData.isPlay});
      if(this.data.isPlay){
        this.setData({musicImgUrl:'/images/music/music-stop.png'});
      }
    }
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