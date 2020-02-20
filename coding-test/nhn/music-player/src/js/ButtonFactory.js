import { observer } from './utils'

class Button {
	constructor(text, eventName) {
		this.text = text
		this.eventName = eventName
	}
	click () {
		observer.notify(this.eventName, null)
	}
	createDom () {
		const self = this
		const button = document.createElement('a')
		button.classList.add('button')
		button.innerText = this.text
		button.addEventListener('click', function () {
				self.click()
		})
		return button
	}
	getText () {
		return this.text
	}
	getEventName () {
		return this.eventName
	}
}

class ButtonContainer {
	constructor (data) {
			this.container = this.__makeData(data)
	}
	__makeData (data) {
		return data.map(item => {
			return new Button(item.text, item.eventName)
		})
	}
	getContainer () {
		return this.container
	}
}

export default function buttonContainer (data) {

	return {
		create: function () {
			return new ButtonContainer(data)
		}
	}
}