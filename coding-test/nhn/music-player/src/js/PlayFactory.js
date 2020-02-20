import { observer } from './utils'

class Player {
  constructor(track) {
    this.track = track
    this.playId = null
    this.status = false
  }
  isPlaying () {
    return this.status
  }
  play () {
    if (!this.track) {
    //   console.log('선택한 곡이 없습니다.')
      return
    }
    if (!this.status) {
      this._playing()
      this.status = true
      this.playId = window.setInterval(() => this._playing(), 1000)
      this.track.updateActive(this.status)
      observer.notify('updateButtonUi', null)
    }
  }
  getPlayId () {
    return this.playId
  }
  stop () {
    if (!this.track) {
    //   console.log('선택한 곡이 없습니다.')
      return
    }
    window.clearTimeout(this.playId)
    this.track.clearTime()
    this.playId = null
    this.status = false
    // console.log('멈춤')
    this.track.updateActive(this.status)
    observer.notify('updateButtonUi', null)
  }
  pause () {
    if (!this.track) {
    //   console.log('선택한 곡이 없습니다.')
      return
    }
    window.clearTimeout(this.playId)
    // console.log('일시정지')
    this.status = false
    this.track.updateActive(this.status)
    observer.notify('updateButtonUi', null)
  }
  _playing() {
    this.track.updateRemaingTime()
    if (this._isDone()) {
      this.stop()
      observer.notify('playNext')
    }
  }
  _isDone () {
    return this.track.getRemaingTime() < 0
  }

  data () {
    return {
      title: this.track && this.track.getTitle(),
      time: this.track && this.track.getDisplayTime()
    }
  }
}

export default function playController (trackList, track) {
  let i = 0
  let currentTrack = track || trackList.getTrack(i)
  const player = new Player(currentTrack)
  return {
    default: function () {
      return player
    },
    player: function (track) {
      return new Player(track)
    },
    prevPlayer: function (index) {
      i = index
      if (i === 0) {
        i = trackList.getTracks().length - 1
      } else {
        i --;
      }
      trackList.active(trackList.getTrack(i))
      return new Player(trackList.getTrack(i))
    },
    nextPlayer: function (index) {
      i = index
      if (i === trackList.getTracks().length - 1) {
        i = 0
      } else {
        i ++
      }
      trackList.active(trackList.getTrack(i))
      return new Player(trackList.getTrack(i))
    }
  }
}