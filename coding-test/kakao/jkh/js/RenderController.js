var RenderController = function(required) {
    if (!required || !RenderUtil.requiredValidate(required)) {
        throw new Error('required error');
    }
    var self = this
    this.name = 'RenderController'
    this.required = required

    var renderConst = RENDER_CONTROLLER_CONST.required
    this.floorButtonContainerId = required[renderConst.floorButtonContainer]
    this.elevatorContainerId = required[renderConst.elevatorContainer]
    this.elevatorLineId = required[renderConst.elevatorLine]
    this.elevatorId = required[renderConst.elevator]
        //이벤트 이름 
    this.elevatorEventName = required[renderConst.elevatorEventName]
    this.renderEventName = required[renderConst.renderEventName]

    //dom
    this.domFloorButtonContainer = document.getElementById(this.floorButtonContainerId)
    this.domElevatorContainer = document.getElementById(this.elevatorContainerId)
    this.domElevatorLine = document.getElementById(this.elevatorLineId)
    this.domElevatorId = document.getElementById(this.elevatorId)

    this.eventListener = function(e) {
        if (self[e.detail.type]) {
            self[e.detail.type](e.detail)
        } else {
            console.log('Elevator event error !')
        }
    }
    window.addEventListener(required[renderConst.renderEventName], this.eventListener, false)
}

RenderController.prototype.inputFloorElevatorSize = function(floorSize, elevatorSize) {
    var floorArr = RenderUtil.getSizeReverseArr(floorSize)
    var elevatorArr = RenderUtil.getSizeArr(elevatorSize)

    //dom초기화
    RenderUtil.removeChild(this.domFloorButtonContainer)
    RenderUtil.removeChild(this.domElevatorContainer)
    this.domFloorButtonContainer.appendChild

    //버튼생성
    RenderUtil.makeFloorButtons(this.domFloorButtonContainer, floorArr)
    RenderUtil.makeElevator(this.domElevatorContainer, elevatorArr, floorArr.length)
    var elevatorHeight = this.domElevatorContainer.clientHeight / floorArr.length;

    let event = new CustomEvent(this.elevatorEventName, {
        detail: {
            type: 'setElevatorHeight',
            elevatorHeight: elevatorHeight
        }
    });
    window.dispatchEvent(event);
}

//user 층 엘레베이터수 입력
RenderController.prototype.inputFloorElevatorSizeToRender = function(detail) {
    var inputfloorId = detail.inputFloorSize
    var inputElevatorId = detail.inputElevatorSize
    var domInputfloor = document.querySelector('#' + inputfloorId)
    var domInputElevator = document.querySelector('#' + inputElevatorId)
    if (!domInputfloor || !domInputElevator) {
        throw new Error('잘못된 id값을 넣었습니다.');
        return
    }
    var floorSize = domInputfloor.value
    var elevatorSize = domInputElevator.value

    if (!RenderUtil.inputValidate(floorSize, elevatorSize)) {
        domInputfloor.value = ""
        domInputElevator.value = ""
        alert('층: 2~5, 엘리베이터: 2~4 값을 넣어주세요.')
        return
    }

    this.inputFloorElevatorSize(floorSize, elevatorSize)

    let elevatorEvent = new CustomEvent(this.elevatorEventName, {
        detail: {
            type: 'setElevatorSize',
            elevatorSize: elevatorSize
        }
    });
    window.dispatchEvent(elevatorEvent);
}