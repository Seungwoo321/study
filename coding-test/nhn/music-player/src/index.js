
import tracks from './tracks.json'
import Render from './js/render'
require('./css/style.css')
const render = new Render({ data: tracks }).getMusicPlayer()

// app
const app = document.getElementById('app')
if (app) {
    const musicPlayer = document.createElement('div')
    musicPlayer.classList.add('music-player')
    musicPlayer.appendChild(render.displayElement)
    musicPlayer.appendChild(render.controllerElement)
    musicPlayer.appendChild(render.tabHeaderElement)
    musicPlayer.appendChild(render.tabContentElement)
    app.appendChild(musicPlayer)


} else {
    console.log(render.displayElement)
    console.log(render.controllerElement)
    console.log(render.tabHeaderElement)
    console.log(render.tabContentElement)
}
