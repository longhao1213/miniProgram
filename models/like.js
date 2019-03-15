import {
  HTTP
} from '../util/HTTP.js'

class LikeModel extends HTTP {
  like(like, id, type) {
    let url = like == 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: "POST",
      data: {
        art_id: id,
        type: type
      }
    })
  }

  getClassicLikeStatus(artId, category, sCallback) {
    this.request({
      url: 'classic/' + category + '/' + artId + '/favor',
      success:sCallback
    })
  }
}

export {
  LikeModel
}