import {config} from '../config.js'

const tips = {
  1:'抱歉,小程序出现一个错误',
  1005:'appKey无效,请前往www.7yue.pro申请',
  3000:'期刊不存在'
}

class HTTP{
  // 定义通用方法
  request(params){
    if(!params.method){
      params.method = "GET"
    }
    // 使用微信方法调用接口
    wx.request({
      url: config.baseUrl + params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        // 返回值的code,并转换为字符串类型
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          // 直接返回数据,判断是否传入success,没传入就不执行后面的
          params.success && params.success(res.data)
        }else{
            // 获取返回值中的具体错误编码
            let err_code = res.data.error_code
            // 调用错误展示方法
            this._show_err(err_code+"")
        }
      },
      fail:(err)=>{
        this._show_err(-1+"")
      }
    })
  }

  _show_err(err_code){
    if(!err_code){
      err_code = 1
    }
    // 调用小程序默认展错误方法
    wx.showToast({
      title: tips[err_code] ? tips[err_code] : tips[1],
      icon:'none',
      duration:2000
    })
  }
}

export {HTTP}