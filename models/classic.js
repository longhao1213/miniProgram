import {HTTP} from '../util/HTTP.js'

class ClassicModel extends HTTP{
  getLatest(sCallback){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export {ClassicModel}