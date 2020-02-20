import ButtonFactory from './ButtonFactory'
import PlayFactory from './PlayFactory'
import TrackListFactory from './TrackListFactory'
import { observer } from './utils'


class Render  {
  constructor ({ data }) {
    this.trackListFactory = TrackListFactory()
    this.trackList = this.trackListFactory.create('default')({ data })
    this.buttonFactory = ButtonFactory
    this.playButton = [
      {
        text: '이전 곡',
        eventName: 'playPrev'
      },
      {
        text: '재생',
        eventName: 'playStart'
      },
      {
        text: '일시정지',
        eventName: 'playPause'
      },
      {
        text: '멈춤',
        eventName: 'playStop'
      },
      {
        text: '다음 곡',
        eventName: 'playNext'
      }
    ],
    this.listButton = [
      {
        text: '재생목록 생성',
        eventName: 'createTrackList'
      },
      {
        text: '삭제',
        eventName: 'deleteTrack'
      }
    ]
    this.trackListElement = []
    this.playController = PlayFactory(this.trackList)
    this.player = this._initPlayer()
    this.displayElement = this._initDisplay()
    this.tabHeaderElement = this._initTabHeader()
    this.tabContentElement = this._initTabContent()
    this.controllerElement = this._initPlayControl()
    this._register()
  }
  _register () {
    observer.register('playStart', this.player.play, this.player)
    observer.register('playStop', this.playStop, this)
    observer.register('playPause', this.playPause, this)
    observer.register('playPrev', this.playPrev, this)
    observer.register('playNext', this.playNext, this)
    observer.register('updatePlayer', this.updatePlayer, this)
    observer.register('updateActiveTrack', this.updateActiveTrack, this)
    observer.register('updateDisplayUi', this.updateDisplayUi, this)
    observer.register('updateButtonUi', this.updateButtonUi, this)
    observer.register('updateTrackListUi', this.updateTrackListUi, this)
    observer.register('createTrackList', this.createTrackList, this)
    observer.register('deleteTrackList', this.deleteTrackList, this)
    observer.register('deleteTrack', this.deleteTrack, this)
  }

  _initPlayer () {
    return this.playController.default()
  }

  _initDisplay () {
      const displayElement = document.createElement('div')
      displayElement.classList.add('music-player__display')
      const displayLabel = document.createElement('div')
      displayLabel.classList.add('music-player__display__label')
      displayElement.appendChild(displayLabel)
      return displayElement
  }

  _initTabHeader () {
    const tabHeaderElement = document.createElement('div')
    tabHeaderElement.classList.add('music-player__tabs-header')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.classList.add('tab')
    li.classList.add('selected')
    const name = this.trackList.getName()
    li.textContent = name
    li.addEventListener('click', () => {
      
      this.reCreateTrackListUi(name)
    })
    ul.append(li)
    tabHeaderElement.appendChild(ul)
    return tabHeaderElement
  }

  _makeTrackListElement (trackList) {
    this.trackListElement = []
    trackList.getTracks().forEach(track => {
      const li = document.createElement('li')
      const label = document.createElement('label')

      const titleText = document.createElement('span')
      titleText.innerText = track.getTitle()
      label.append(titleText)

      const timeText = document.createElement('span')
      timeText.innerText = track.getReplayTime()
      label.append(timeText)

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.value = track.getId()
      checkbox.name = 'track'
      li.append(checkbox)

      checkbox.addEventListener('click', function () {
        this.checked ? track.select() : track.deselect()
      })
      label.addEventListener('click', () => {
        this.trackList.active(track)
        li.classList.toggle('active')
      })

      li.append(label)
      this.trackListElement.push(li)
    })
  }

  _initTabContent () {
    const tabContentElement = document.createElement('div')
    tabContentElement.classList.add('music-player__tabs-content')

    const containerButton = document.createElement('div')
    containerButton.classList.add('container__button')
    const factory = this.buttonFactory(this.listButton).create()
    factory.container.forEach(button => containerButton.appendChild(button.createDom()))

    const ul = document.createElement('ul')
    this._makeTrackListElement(this.trackList)
    this.trackListElement.forEach(li => ul.append(li))
      
    const container = document.createElement('div')
    container.classList.add('container__list')
    container.append(ul)
    tabContentElement.appendChild(containerButton)
    tabContentElement.appendChild(container)
    return tabContentElement
  }


  _initPlayControl () {
    const controllerElement = document.createElement('div')
    controllerElement.classList.add('music-player__controller')
    const buttonContainer = this.buttonFactory(this.playButton).create()
    const container = document.createElement('div')
    container.classList.add('container__button')
    buttonContainer.getContainer()
      .filter(button => this.player.isPlaying() ? button.getEventName() !== 'playStart' : button.getEventName() !== 'playPause')
      .map(button => {
        container.append(button.createDom())
      })
    controllerElement.appendChild(container)
    return controllerElement
  }
  updateActiveTrack (track) {
    const newPlayer = this.playController.player(track)
    this.updatePlayer(newPlayer)
  }

  updateTrackListUi (track) {
    if (track) {
      this.updateDisplayUi()
      this.updateButtonUi()
      this.trackListElement.forEach((li, index) => {
        this.trackList.getTrack(index).isActive() ? li.classList.add('playing') : li.classList.remove('playing')
        li.classList.remove('active')
      })
    }
  }

  playPrev () {
    const index = (this.trackList.getActiveTrack() && this.trackList.getActiveTrack().getId()) || 0
    const prevPlayer = this.playController.prevPlayer(index)
    this.player.stop()
    this.updatePlayer(prevPlayer)
    prevPlayer.play()
  }
  playNext () {
    const index = (this.trackList.getActiveTrack() && this.trackList.getActiveTrack().getId()) || 0
    const nextPlayer = this.playController.nextPlayer(index)
    this.player.stop()
    this.updatePlayer(nextPlayer)
    nextPlayer.play()
  }

  playPause () {
    this.player.pause()
    const newPlayer = this.playController.player(this.trackList.getActiveTrack())
    this.updatePlayer(newPlayer)
  }

  playStop () {
    const newPlayer = this.playController.player(this.trackList.getActiveTrack())
    this.updatePlayer(newPlayer)
    this.player.stop()
  }

  updateDisplayUi () {
      const data = this.player.data()
      this.displayElement.firstChild.textContent = data.title
      const span = document.createElement('span')
      span.textContent = data.time
      this.displayElement.firstChild.appendChild(span)
  }
  updatePlayer(newPlayer) {
    if (!this.player.isPlaying()) {
      observer.unregister('playStart', this.player.play, this.player)
      observer.unregister('playPause', this.player.pause, this.player)
      this.player = newPlayer
      observer.register('playStart', newPlayer.play, newPlayer)
      observer.register('playPause', newPlayer.pause, newPlayer)
    }
  }
  updateButtonUi () {
    this.controllerElement.removeChild(this.controllerElement.firstChild)
    const buttonContainer = this.buttonFactory(this.playButton).create()
    const container = document.createElement('div')
    container.classList.add('container__button')
    buttonContainer.getContainer()
      .filter(button => this.player.getPlayId() ? button.getEventName() !== 'playStart' : button.getEventName() !== 'playPause')
      .map(button => {
        container.append(button.createDom())
      })
    this.controllerElement.appendChild(container)
  }

  createTrackList () {
    const selectedSong = this.trackList.getSelectedSong()
    if (selectedSong < 1) {
      alert('음원을 1개 이상 선택해주세요')
      return
    }
    const name = `재생목록${this.trackListFactory.size()}`
    this.trackListFactory.create('playlist')({ name, data: selectedSong })
    this.updateHeaderUi(name)
  }

  deleteTrack () {
    const selectedTitle = this.trackList.getSelectedSong().map(track => track.getTitle())
    if (selectedTitle < 1) {
      alert('음원을 1개 이상 선택해주세요')
      return
    }
  }
  
  
  updateHeaderUi(name) {
    const ul = this.tabHeaderElement.firstChild
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.classList.add('icon')
    span.innerHTML = '&times;'
    li.classList.add('tab')
    li.addEventListener('click', () => {
      this.reCreateTrackListUi(name)
    })
    li.textContent = name
    li.append(span)
    ul.append(li)
    this.tabHeaderElement.appendChild(ul)
    return this.tabHeaderElement
  }

  reCreateTrackListUi(name) {
    
    if (this.tabContentElement.lastChild.firstChild) {
      this.tabContentElement.lastChild.removeChild(this.tabContentElement.lastChild.firstChild)
    } 
    const ul = document.createElement('ul')
    this.trackList = this.trackListFactory.get()[name]
    console.log(this.trackList)
    this._makeTrackListElement(this.trackList)
    this.trackListElement.forEach(li => ul.append(li))
    console.log(ul)
    this.tabContentElement.lastChild.append(ul)
  }

  getMusicPlayer () {
    return {
      displayElement: this.displayElement,
      tabHeaderElement: this.tabHeaderElement,
      tabContentElement: this.tabContentElement,
      controllerElement: this.controllerElement
    }
  }
  
}

export default Render