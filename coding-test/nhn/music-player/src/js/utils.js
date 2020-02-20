
const observer = {
    handlers: {},
    register: function (eventName, handler, context) {
        if (!this.handlers[eventName]) this.handlers[eventName] = []
        this.handlers[eventName].push({ handler, context })
    },
    unregister: function (eventName, handler, context) {
        this.handlers[eventName] = this.handlers[eventName].filter(value => value.handler !== handler && value.context !== context)
    },
    notify: function (eventName, data) {
        this.handlers[eventName].forEach(({ handler, context }) => {
            handler.call(context, data)
        })
    }
}

const render = function (html) {
    return function () {
        return html
    }
}

export {
    observer,
    render
}