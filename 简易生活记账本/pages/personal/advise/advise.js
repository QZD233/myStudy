// pages/personal/advise/advise.js
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2018年11月",
  },
  //表单提交函数，将建议数据给服务器
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.inputArea)
    wx.request({
      url: 'http://139.199.65.146:6060/jizhang/insertAdvise',
      data : {
        date:this.data.date,
        info:e.detail.value.inputArea
      },
      success(res) {
        console.log(res.data)
        wx.navigateTo({
          url: '../../homePage/homePage',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var TIME = util.formatData(new Date());
    this.setData({
      date: TIME,
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