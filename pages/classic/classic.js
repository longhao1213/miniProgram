import {
  ClassicModel
} from '../../models/classic.js'
import {
  LikeModel
} from '../../models/like.js'

let classic = new ClassicModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    frist: false,
    latest: true,
    likeStatus: false,
    likeCount: 0
  },
  onLike: function(event) {
    likeModel.like(event.detail.behavior, this.data.classicData.id, this.data.classicData.type)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    classic.getLatest((res) => {
      this.setData({
        classicData: res,
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      })
    })
  },

  onNext: function() {
    this._updateClassicInfo('next')
  },

  onPrevious: function() {
    this._updateClassicInfo("previous")
  },

  _updateClassicInfo(type) {

    let index = this.data.classicData.index
    classic.getInfo(index, type, (res) => {
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classicData: res,
        frist: classic.isFrist(res.index),
        latest: classic.isLatest(res.index)
      })
    })
  },

  _getLikeStatus(artId, category) {
    likeModel.getClassicLikeStatus(artId, category, (res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
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