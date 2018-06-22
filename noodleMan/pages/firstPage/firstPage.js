// pages/firstPage/firstPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftNavArr:[15,180,345,510,675],
    leftNav:15,
    current:0
  },
  // 点击导航栏
  changeIndex:function(e){
    // console.log(e.currentTarget.dataset.index);
    this.setData({
      leftNav: this.data.leftNavArr[(Number(e.currentTarget.dataset.index))-1],
      current: (Number(e.currentTarget.dataset.index)) - 1
    })
  },
  // 滑动轮播图
  bindchanges:function(event){
    // console.log(event.detail.current);
    this.setData({
      leftNav: this.data.leftNavArr[event.detail.current],
      current: event.detail.current
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