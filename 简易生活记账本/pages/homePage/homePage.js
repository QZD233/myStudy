// pages/homePage.js
var util = require('../../utils/util.js');
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: "2018年11月",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    income: 1000,
    outcome: 1000,
    comeMoney: 0,
    angin_getUserInfo: true,
    account : null
  },
  //事件处理函数
  toHistory: function() {
    wx.navigateTo({
      url: '../history/history'
    })
  },
  toBook: function() {
    wx.navigateTo({
      url: '../book/book'
    })
  },
  //如果前期获取数据失败，则可以点击按钮获取数据
  anginGetInfo: function() {
    wx.request({
      url: 'http://139.199.65.146:6060/jizhang/getUserInfo',
      data: {
        openid: app.globalData.openid
        // openid : "xafa1"
      },
      success: res => {
        console.log("获取返回的用户数据");
        console.log(res.data);
        if (res.data.get_data == true) {
          this.setData({
            account: res.data,
            angin_getUserInfo: false
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      // console.log(app.globalData.userInfo);
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // console.log("第一次请求");
        // console.log(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          // console.log("第二次请求");
          // console.log(res);
        }
      })
    }
    this.setData({
      openid: app.globalData.openid
    })
    wx.login({

    })
    var TIME = util.formatData(new Date());
    this.setData({
      data: TIME,
    })
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
    //在回调函数中，该js的this不能使用，需要拿一个that去保存该js的this
    var that = this;
    //使用循环的方法，一秒一次，不断得向服务器请求数据，直到成功
    var index = setInterval(function() {
      //请求数据
      wx.request({
        url: 'http://139.199.65.146:6060/jizhang/getUserInfo',
        data: {
          openid: app.globalData.openid
          // openid : "xafa1"
        },
        success: res => {
          console.log("获取返回的用户数据");
          console.log(res.data);
          if (res.data.get_data == true) {
            that.setData({
              account: res.data,
              angin_getUserInfo: false
            })
          }
        }
      })
      //展示正在请求数据
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',
        duration: 1000
      });
      //用来请求图表数据
      wx.request({
        url: 'http://139.199.65.146:6060/jizhang/getChartInfo',
        data: {
          openid: app.globalData.openid
        },
        success: res => {
          console.log(res);
          console.log(res.data)
          that.setData({
            today: res.header.Date
          })
          app.globalData.account = res.data
        }
      })
      console.log(app.globalData.account)
      //如果已经找到数据，则取消循环
      if (that.data.angin_getUserInfo == false) {
        clearInterval(index);
      }
    }, 1000)


    // //单次请求数据调试
    // wx.request({
    //   url: 'http://139.199.65.146:6060/jizhang/getUserInfo',
    //   data: {
    //     openid: app.globalData.openid
    //     // openid : "xafa1"
    //   },
    //   success: res => {
    //     console.log("获取返回的用户数据");
    //     console.log(res.data);
    //     if (res.data.get_data == true) {
    //       that.setData({
    //         account: res.data,
    //         angin_getUserInfo: false
    //       })
    //     }
    //   }
    // })

    // // 单次用来请求图表数据
    // wx.request({
    //   url: 'http://139.199.65.146:6060/jizhang/getChartInfo',
    //   data: {
    //     openid: app.globalData.openid
    //   },
    //   success: res => {
    //     console.log(res);
    //     console.log(res.data)
    //     this.setData({
    //       today: res.header.Date
    //     })
    //     app.globalData.account = res.data
    //   }
    // })
    // console.log(app.globalData.account)

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

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})