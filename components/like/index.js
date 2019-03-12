// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      // 类型
      type:Boolean,
      // 默认值
      value:false
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yseSrc:"images/like.png",
    noSrc:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like
      let count = this.properties.count
      count = like?count-1:count+1
      if(count<0){
        count = 0
      }
      this.setData({
        count:count,
        like:!like
      })
      // 自定义事件
      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{
        behavior:behavior
      },{})
    }
  }
})
