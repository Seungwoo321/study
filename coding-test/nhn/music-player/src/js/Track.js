import { observer } from './utils'

class Track {
    constructor({ id, title, replaytime }) {
        this.id = id
        this.title = title
        this.replayTime = replaytime
        this.remaingTime = replaytime
        this.selected = false
        this.active = false
    }
    getId () {
        return this.id
    }
    isActive () {
        return this.active
    }
    getTitle () {
        return this.title
    }

    getRemaingTime () {
        return this.remaingTime
    }
    
    getDisplayTime () {
        return `-${this.__displayTime(this.remaingTime)}`
    }

    __displayTime (time) {
        if (time > 60) {
            return `01:${time - 60 < 10 ? '0' : ''}${time - 60}`
        } else {
            return `00:${time < 10 ? '0' : ''}${time}`
        }
    }

    getPlayTime () {
        return this.replayTime - this.remaingTime
    }
    getReplayTime () {
        return this.__displayTime(this.replayTime)
    }

    getProgress () {
        return this.remaingTime / this.replayTime
    }

    updateActive (status) {
        this.active = status
        observer.notify('updateTrackListUi', this)
    }

    updateRemaingTime () {
        if (this.remaingTime < 0) {
            this.active = false
        } else {
            this.remaingTime -= 1
            this.active = true
            observer.notify('updateDisplayUi')
        }
    }

    getSelected () {
        return this.selected
    }

    select () {
        this.selected = true
    }

    deselect () {
        this.selected = false
    }

    clearTime () {
        this.remaingTime = this.replayTime
        this.active = false
        observer.notify('updateDisplayUi')
    }
}

export default Track