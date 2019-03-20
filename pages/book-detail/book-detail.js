import {
  BookModel
} from '../../models/book.js'

let bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: null,
    comment: null,
    likeStatus: false,
    likeCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const bid = options.bid
    const detail = bookModel.getDetail(bid)
    const likeStatus = bookModel.getLikeStatus(bid)
    const comment = bookModel.getComments(bid)

    detail.then(res => {
      this.setData({
        book: res
      })
    })

    comment.then(res => {
      this.setData({
        comment: res
      })
    })

    likeStatus.then(res => {
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
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