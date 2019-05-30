// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    brr:[{
      "name":"我的订阅",
      "flag":false
    }, {
        "name": "推荐订阅",
        "flag": false
      }],
    arr: [{
      "img": "../../images/shipin.png",
      "title": "【新春特辑一自我相处】",
      "name": "蔡康永的201情商课"
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
    }],
    num:0,
    currentTab:0
  },
    join:function(){
     let {num} = this.data
       ++num
     this.setData({
       num: num
     })
   },
  btn: function (en) {
    console.log(en.target.dataset.ind)
    let ind = en.target.dataset.ind
    this.data.brr[ind].flag = !this.data.brr[ind].flag
    this.setData({
      brr: this.data.brr
    })
    console.log(this.data.brr)
  },
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
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