import Track from "./Track"
import { observer } from "./utils"

class ListBase {
    constructor(name, selected = true) {
        this.name = name
        this.selected = selected
        this.tracks = []
        this.activeTrack = null
    }
    _makeRandomNumbers (max) {
        const nums = new Set()
        while (nums.size < 20) {
            nums.add(Math.floor(Math.random() * max))
        }
        return nums
    }
    select () {
        this.selected = true
    }
    deselect () {
        this.selected = false
    }
    getTracks () {
        return this.tracks
    }
    active (track) {
        this.activeTrack = track
        observer.notify('updateActiveTrack', track)
        observer.notify('updateTrackListUi', track)
    }
    getActiveTrack () {
        return this.activeTrack
    }
    deletTrack (id) {
        this.tracks = this.tracks.filter(track => track.getId() !== id)
    }
}

class BaseTrackList extends ListBase {
    constructor({ name, data, selected, activeIndex = 0 }) {
        super(name, selected)
        this.tracks = this._makeData(data)
    }
    _makeData (data) {
        const randomNumbers = this._makeRandomNumbers(data.length)
        return data.filter((value, index) => randomNumbers.has(index)).map((value, index) =>
            new Track({
                id: index,
                title: value.title,
                replaytime: value.replaytime
            })
        )
    }
    getTrack (id) {
        return this.tracks[id]
    }

    getName () {
        return this.name
    }

    getSelectedSong () {
        return this.tracks.filter(value => value.selected)
    }
}

class PlayTrackList extends ListBase {
    constructor({ name, data, selected = false, activeIndex = 0 }) {
        super(name, selected)
        this.tracks = this._makeData(data)
    }
    _makeData (data) {
        return data.map((value, index) => {
            if (!(value instanceof Track)) {
                throw new Error("is not instanceof 'Track'")
            }
            return new Track({
                id: index,
                title: value.title,
                replaytime: value.replayTime,
                selected: false
            })
        })
    }
    getTrack (id) {
        return this.tracks[id]
    }

    getName () {
        return this.name
    }

    getSelectedSong() {
        return this.tracks.filter(value => value.selected)
    }
}

const data = {}
export default function TrackList () {
    return {
        create (type) {
            const factory = {
                default (options) {
                    if (!data[options.name = '음원목록']) {
                        const item = new BaseTrackList(options)
                        data[options.name] = item
                        return item
                    } else {
                        throw new Error('중복 이름')
                    }
                },
                playlist (options) {
                    if (!data[options.name]) {
                        const item = new PlayTrackList(options)
                        data[options.name] = item
                        return item
                    } else {
                        throw new Error('중복 이름')
                    }
                }
            }
            return factory[type]
        },
        get: function () {
            return data
        },
        remove: function (name) {
            const tmp = data[name]
            delete data[name]
            return tmp
        },
        size: function () {
            return Object.keys(data).length
        }
    }
}
