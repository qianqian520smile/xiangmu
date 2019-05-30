// pages/homes/homes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558958731&di=f6754e100e2621283366b528226ee72a&src=http://youimg1.c-ctrip.com/target/tg/519/430/096/974b55263fad4c9ab438dba9cbbc158e.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558968816187&di=c17cc876ddc78a6f73d99fa9df1cd534&imgtype=0&src=http%3A%2F%2Fpic146.nipic.com%2Ffile%2F20171112%2F25779728_185942485034_2.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558968816176&di=e165bca9e4eceb6f98be5b74d650a62f&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130320%2F8952533_092547846000_2.jpg"],
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'http://m.ximalaya.com/revision/seo/getTdk?typeName=OTHER&uri=%2Fhome%2Fyoushengshu&tdkType=wap',
        success: (res) => {
          // console.log(res.data.data.tdkMeta)
          this.setData({
            list: res.data.data.tdkMeta.hotLinks
          })
        }
      })
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