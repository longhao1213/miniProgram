// components/classic/music/index.js
import {
  ClassicBeh
} from '../classic_beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  behaviors: [ClassicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png'
  },

  attached: function() {
    this._recoverPlaying()
    this._monitorSwitch()
  },
  detached:function(){
    // mMgr.stop()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function(event) {
      if (!this.data.playing){
        // 图片切换
        this.setData({
          playing: true
        })
        mMgr.title = this.properties.title
        mMgr.src = this.properties.src
      }else{
        this.setData({
          playing:false
        })
        mMgr.pause()
      }
      
    },
    _recoverPlaying:function(){
      if(mMgr.paused){
        // 如果音乐没有播放
        this.setData({
          playing:false
        })
        return
      }
      if(mMgr.src == this.properties.src){
        // 正在播放
        this.setData({
          playing:true
        })
      }
    },
    _monitorSwitch:function(){
    
      mMgr.onPlay(()=>{
        this._recoverPlaying()
      })
      mMgr.onPause(() => {
        this._recoverPlaying()
      })
      mMgr.onStop(() => {
        this._recoverPlaying()
      })
      mMgr.onEnded(() => {
        this._recoverPlaying()
      })
    }
  }
})