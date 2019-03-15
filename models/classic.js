import {
  HTTP
} from '../util/HTTP.js'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)
        wx.setStorageSync(this._getKey(res.index), res)
      }
    })
  }


  getInfo(index, type, sCallback) {
    // 加入缓存
    let res = type == "next" ? wx.getStorageSync(this._getKey(index + 1)) : wx.getStorageSync(this._getKey(index - 1))
    if(!res){
      // 缓存中没有数据
      this.request({
        // 模板字符串
        url: `classic/${index}/${type}`,
        success: (res) => {
          sCallback(res)
          // 存储数据到缓存
          wx.setStorageSync("classic-" + res.index, res)
        }
      })
    }else{
      // 缓存中有数据
      return sCallback(res)
    }
   
  }

  isFrist(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    let lastIndex = this._getLatestIndex()
    return lastIndex == index ? true : false
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }

  _getKey(index) {
    let key = "classic-" + index
    return key
  }
}

export {
  ClassicModel
}