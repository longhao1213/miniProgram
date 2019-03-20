import {
  BookModel
} from '../../models/book.js'

let bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const hotList = bookModel.getHotList()
    hotList.then(
      res=>{
        this.setData({
          books:res
        })
      }
    )
    // // 创建promise,需要传入一个回调函数,回调函数需要传入两个参数
    // const promise = new Promise((resolve, reject) => {
    //   /**
    //    * promise有三种状态
    //    * pending : 进行中
    //    * fulfilled : 已成功
    //    * rejected : 已失败
    //    * promise状态一单修改,就不能再次被改动
    //    */
    //   // 调用一个异步的方法
    //   wx.getSystemInfo({
    //     success: (res) => {
    //       resolve(res)
    //     },
    //     fail: (error) => {
    //       reject(error)
    //     }
    //   })
    // })

    // // 通过then方法来获取结果
    // /**
    //  * then方法传入两个回调方法
    //  * 第一个是成功的回调方法,第二是失败的回调方法
    //  * 两个方法顺序不能更改
    //  * 但是如果只需要其中一种,可以只传入一种
    //  */
    // promise.then((res) => {
    //   console.log(res)
    // }, (error) => {
    //   console.log(error)
    // })
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