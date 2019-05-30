// pages/look/look.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "img": "../../images/cover.png",
      "name": "听友圈"
    }, {
      "img": "../../images/cover.png",
      "name": "全民阅读"
    }, {
      "img": "../../images/cover.png",
      "name": "大卡主播"
    }, {
      "img": "../../images/cover.png",
      "name": "戏码精选"
    }, {
      "img": "../../images/cover.png",
      "name": "边听边读"
    }, {
      "img": "../../images/cover.png",
      "name": "游戏中心"
    }, {
      "img": "../../images/cover.png",
      "name": "问答"
    }, {
      "img": "../../images/cover.png",
      "name": "活动"
    }, {
      "img": "../../images/cover.png",
      "name": "免流量"
    }, {
      "img": "../../images/cover.png",
      "name": "畅听"
    }],
    arr:[{
      "img": "../../images/shipin.png",
      "title":"【新春特辑一自我相处】",
      "name":"蔡康永的201情商课"
    }, {
        "img": "../../images/shipin.png",
        "title": "【我们为什么不开心】",
        "name": "如何克服自卑，怯懦，忧伤"
      }, {
        "img": "../../images/shipin.png",
        "title": "【最科学的追求攻略】",
        "name": "5分钟心理学"
      }, {
        "img": "../../images/shipin.png",
        "title": "【新春特辑一自我相处】",
        "name": "蔡康永的201情商课"
      }]
  },
  jump:function(){
    wx.navigateTo({
      url: "/pages/xiang/xiang"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})