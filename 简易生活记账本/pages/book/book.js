// pages/book/book.js
var util = require('../../utils/util.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: "2018年11月",
    incomeButton: "primary",
    outcomeButton: "primary",
    //comeType代表着钱的类型，1是支出，0是收入
    comeType: 1,
    showTopTips: false,
    beizhu: ""
  },
//当点击收入按钮时，将收入按钮设置为白色，并设置传入服务器的金额类型
  income: function () {
    this.setData({
      incomeButton: "default",
      outcomeButton: "primary",
      comeType: 0
    })
  },
//当点击支出按钮时，将支出按钮设置为白色
  outcome: function () {
    this.setData({
      incomeButton: "primary",
      outcomeButton: "default",
      comeType: 1
    })
  },
//当内容输入框失去焦点时，将数据写入本地数据
  submit_beizhu:function (e){
    // console.log(e.detail.value);
    this.setData({
      beizhu:e.detail.value
    })
    console.log(this.data.beizhu)
  },
  
  // 这是提交按钮触发函数，弹出提示信息，同时跳转到历史记录页面
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
    wx.navigateTo({
      url: '../history/history'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var TIME = util.formatData(new Date());
    this.setData({
      data: TIME,
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
    console.log(getApp().globalData);
    //在加载的时候，读取全局变量，保存之前写的内容
    this.setData({
      countryCodeIndex: getApp().globalData.countryCodeIndex,
      beizhu: getApp().globalData.beizhu
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //在页面隐藏的时候，将数据写到全局变量里面
    getApp().globalData.countryCodeIndex = this.data.countryCodeIndex;
    getApp().globalData.beizhu = this.data.beizhu;
    // console.log(getApp().globalData);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { 
    //在页面隐藏的时候，将数据写到全局变量里面
    getApp().globalData.countryCodeIndex = this.data.countryCodeIndex;
    getApp().globalData.beizhu = this.data.beizhu;
    // console.log(getApp().globalData);
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