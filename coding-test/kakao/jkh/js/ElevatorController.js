var ElevatorController = function(required) {
    if (!required || !ElevatorUtil.requiredValidate(required)) {
        throw new Error('ElevatorController targetId error')
    }

    var self = this
    this.name = 'ElevatorController'
    this.required = required
    var elevatorConst = ELEVATOR_CONTROLLER_CONST.required
    this.elevatorContainerId = required[elevatorConst.elevatorContainer]
    this.floorButtonContainerId = required[elevatorConst.floorButtonContainer]
    this.elevatorDomId = required[elevatorConst.elevatorId]
    this.domElevatorContainer = document.getElementById(this.elevatorContainerId)
    this.domFloorButtonContainer = document.getElementById(this.floorButtonContainerId)
    this.renderEventName = required[elevatorConst.renderEventName]
    this.elevatorEventName = required[elevatorConst.elevatorEventName]

    this.floorButtonTable = {}
    this.delay = 3000
    this.elevatorHeight = 0
    this.elevatorSize = 0
    this.elevators = {}

    this.eventListener = function(e) {
        if (self[e.detail.type]) {
            self[e.detail.type](e.detail)
        } else {
            console.log('Elevator event error !', e)
        }
    }
    if (!this.container) {
        new Error('targetId error ')
    }
    window.addEventListener(required[elevatorConst.elevatorEventName], this.eventListener, false)
}
ElevatorController.prototype.setElevatorHeight = function(detail) {
    var elevatorHeight = detail.elevatorHeight
    if (isNaN(elevatorHeight)) {
        console.log('setElevatorHeight error')
        return
    }
    this.elevatorHeight = elevatorHeight;
}
ElevatorController.prototype.setElevatorSize = function(detail) {
    this.elevatorSize = detail.elevatorSize
    this.initElevatorList(this.elevatorSize)
}

ElevatorController.prototype.initElevatorList = function(elevatorSize) {
    this.elevators = {}
    for (var i = 1; i <= elevatorSize; i++) {
        var elevatorObject = ElevatorUtil.getElevatorObjectStructure()
        elevatorObject.id = i
        this.elevators[i] = elevatorObject
    }
}

ElevatorController.prototype.onClickFloor = function(detail) {
    var floor = detail.floor
    this.decideTask(floor)
}

ElevatorController.prototype.moveElevalor = function(elevatorId, score, floor) {
    var targetDom = this.domElevatorContainer.querySelector('#' + this.elevatorDomId + elevatorId)
    targetDom.classList.add('on')
    targetDom.style.transition = 'bottom ' + (score / 1000) + 's'
    targetDom.style.bottom = this.elevatorHeight * (floor - 1)
    setTimeout(function() {
        targetDom.classList.remove('on')
    }, score)
}

ElevatorController.prototype.decideTask = function(floor) {
    var self = this
    var restElevator = ElevatorUtil.getRestElevators(this.elevators)
    var targetElevator = null
    var scoreList = []
    var minScore = null
    var isBusy = false
    var elevatorValues = Object.values(this.elevators)
    var keys = Object.keys(this.elevators)
    if (ElevatorUtil.isSameFloor(elevatorValues, floor)) {
        return
    }

    if (this.floorButtonTable[floor] && !moment.unix(this.floorButtonTable[floor]).isAfter()) {
        return
    }

    if (0 !== restElevator.length) {
        restElevator.forEach(function(rest) {
            var result = {
                id: rest.id,
                score: Math.abs(rest.floor - floor) * 1000
            }
            scoreList.push(result)
        })
    } else {
        isBusy = true
        keys.forEach(function(key) {
            var result = {
                id: key,
                score: ElevatorUtil.getCalculateScore(self.elevators[key], floor, self.delay)
            }
            scoreList.push(result)
        })

    }
    scoreList.forEach(function(item) {
        if (!minScore) {
            minScore = item
        }
        if (minScore.score > item.score) {
            minScore = item
        }
    })

    this.floorButtonTable[floor] = parseInt(moment().format('x'), 10) + minScore.score
    if (!isBusy) {
        this.modifyFloorButtonStyle(floor, minScore.score)
        this.elevators[minScore.id].taskDoneDate = parseInt(moment().format('x'), 10) + minScore.score + this.delay
        this.elevators[minScore.id].floor = floor
        this.moveElevalor(minScore.id, minScore.score, floor)

        setTimeout(function() {
            self.checkTaskQueue(self.elevators[minScore.id])
        }, minScore.score + this.delay)
    } else {
        var queueLength = this.elevators[minScore.id].taskQueue.length
        var plus
        if (queueLength === 0) {
            plus = Math.abs(this.elevators[minScore.id].floor - floor) * 1000
        } else {
            plus = Math.abs(this.elevators[minScore.id].taskQueue[queueLength - 1] - floor) * 1000
        }

        this.modifyFloorButtonStyle(floor, minScore.score + plus)
        this.elevators[minScore.id].taskQueue.push(floor)
    }
}

ElevatorController.prototype.checkTaskQueue = function(elevator) {
    if (elevator.taskQueue.length !== 0) {
        var self = this
        var id = elevator.id
        var targetFloor = this.elevators[id].taskQueue.shift()
        var score = Math.abs(this.elevators[id].floor - targetFloor) * 1000
        this.elevators[id].taskDoneDate = parseInt(moment().format('x'), 10) + score + this.delay
        this.elevators[id].floor = targetFloor
        this.moveElevalor(id, score, targetFloor)
        setTimeout(function() {
            self.checkTaskQueue(self.elevators[id])
        }, score + this.delay)
    }
}

ElevatorController.prototype.modifyFloorButtonStyle = function(floor, score) {
    var target = this.domFloorButtonContainer.querySelector('#' + FLOOR_CONST.floorId + floor)
    target.classList.add('on')
    setTimeout(function() {
        target.classList.remove('on')
    }, score)
}