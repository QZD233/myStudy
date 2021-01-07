// pages/history/history.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account :[]
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
    //展示正在请求数据
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 30000
    });
    wx.request({
      url: 'http://139.199.65.146:6060/jizhang/getAccount',
      data: {
        openid: app.globalData.openid
      },
      success: res => {
        console.log(res.data);
        this.setData({
          account: res.data
        })
        wx.showToast({
          title: '已完成',
          icon: 'success',
          duration: 3000
        });
      }
    })

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