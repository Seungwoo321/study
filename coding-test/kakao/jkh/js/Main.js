var startElevator = function(inputFloorSize, inputElevatorSize) {
    let elevatorEvent = new CustomEvent(CUSTOM_EVENT_NAME.render, {
        detail: {
            type: 'inputFloorElevatorSizeToRender',
            inputFloorSize: inputFloorSize,
            inputElevatorSize: inputElevatorSize,
            onClickFloorFuncName: FLOOR_CONST.onClickFloorFuncName
        }
    });
    window.dispatchEvent(elevatorEvent);
}

var onClickFloor = function(floor) {
    let elevatorEvent = new CustomEvent(CUSTOM_EVENT_NAME.elevator, {
        detail: {
            type: 'onClickFloor',
            floor: floor
        }
    });
    window.dispatchEvent(elevatorEvent);
}

var SettingObject = {
    elevatorContainer: 'elevatorContainer',
    floorButtonContainer: 'floorButtonContainer',
    elevatorId: 'elevator',
    elevatorLine: 'elevatorLine'
}

var elevatorControllerRequired = {
    [ELEVATOR_CONTROLLER_CONST.required.elevatorContainer]: SettingObject.elevatorContainer,
    [ELEVATOR_CONTROLLER_CONST.required.floorButtonContainer]: SettingObject.floorButtonContainer,
    [ELEVATOR_CONTROLLER_CONST.required.elevatorId]: SettingObject.elevatorId,
    [ELEVATOR_CONTROLLER_CONST.required.elevatorEventName]: CUSTOM_EVENT_NAME.elevator,
    [ELEVATOR_CONTROLLER_CONST.required.renderEventName]: CUSTOM_EVENT_NAME.render,
}
var elevatorController = new ElevatorController(elevatorControllerRequired)

var renderControllerRequired = {
    [RENDER_CONTROLLER_CONST.required.floorButtonContainer]: SettingObject.floorButtonContainer,
    [RENDER_CONTROLLER_CONST.required.elevatorContainer]: SettingObject.elevatorContainer,
    [RENDER_CONTROLLER_CONST.required.elevatorLine]: SettingObject.elevatorLine,
    [RENDER_CONTROLLER_CONST.required.elevatorId]: SettingObject.elevatorId,
    [RENDER_CONTROLLER_CONST.required.elevatorEventName]: CUSTOM_EVENT_NAME.elevator,
    [RENDER_CONTROLLER_CONST.required.renderEventName]: CUSTOM_EVENT_NAME.render,
}
var renderController = new RenderController(renderControllerRequired)