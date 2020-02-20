var ElevatorUtil = {
    requiredValidate: function(required) {
        if (!required) {
            return false
        }
        var constsKey = Object.keys(ELEVATOR_CONTROLLER_CONST.required)
        var result = true
        constsKey.forEach((key) => {
            if (!required.hasOwnProperty(key)) {
                result = false
            }
        })

        return result;
    },
    getElevatorObjectStructure: function() {
        var elevatorObject = {
            floor: 1,
            taskDoneDate: parseInt(moment().format('x'), 10),
            taskQueue: []
        }
        return elevatorObject;
    },
    getRestElevators: function(elevators) {
        var values = Object.values(elevators)
        var result = values.filter(function(elevator) {
            return parseInt(moment().format('x'), 10) > elevator.taskDoneDate
        })
        return result;
    },
    getCalculateScore: function(elevator, floor, daley) {
        var score = 0;
        score += Math.abs(parseInt(moment().format('x'), 10) - elevator.taskDoneDate)
        if (elevator.taskQueue.length === 1) {
            score += (Math.abs(elevator.floor - elevator.taskQueue[0]) * 1000)
            score += daley
        } else {
            var lastIndex = elevator.taskQueue.length
            for (var i = 0; i < lastIndex; i++) {
                score += daley
                if (i === 0) {
                    score += (Math.abs(elevator.floor - elevator.taskQueue[0]) * 1000)
                } else {
                    score += (Math.abs(elevator.taskQueue[i - 1] - elevator.taskQueue[i]) * 1000)
                }
            }
        }
        if (score < 1000) {
            console.log('score작어 !!!', score)
        }

        return score
    },
    isSameFloor(elevatorValues, floor) {
        var result = false
        elevatorValues.forEach(function(elevator) {
            if (elevator.floor === floor) {
                result = true
            }
        })
        return result
    }
}