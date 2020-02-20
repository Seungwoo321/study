var ELEVATOR_CONTROLLER_CONST = {
    required: {
        elevatorContainer: 'elevatorContainer',
        floorButtonContainer: 'floorButtonContainer',
        elevatorId: 'elevatorId',
        elevatorEventName: 'elevatorEventName',
        renderEventName: 'renderEventName'
    }
}

var RENDER_CONTROLLER_CONST = {
    required: {
        floorButtonContainer: 'floorButtonContainer',
        elevatorContainer: 'elevatorContainer',
        elevatorLine: 'elevatorLine',
        elevatorId: 'elevatorId',
        elevatorEventName: 'elevatorEventName',
        renderEventName: 'renderEventName'
    },
}

var CUSTOM_EVENT_NAME = Object.freeze({
    render: 'render',
    elevator: 'elevator',
})

var FLOOR_CONST = Object.freeze({
    onClickFloorFuncName: 'onClickFloor',
    floorId: 'floor'
})