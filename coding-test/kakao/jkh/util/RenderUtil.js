var RenderUtil = {
    requiredValidate: function(required) {
        if (!required) {
            return false
        }
        var constsKey = Object.keys(RENDER_CONTROLLER_CONST.required)
        var result = true
        constsKey.forEach((key) => {
            if (!required.hasOwnProperty(key)) {
                result = false
            }
        })

        return result;
    },
    getSizeReverseArr: function(size) {
        if (isNaN(size)) {
            console.log('getSizeArr error')
            return
        }
        size = size * 1
        var resultArr = []
        for (var i = 0; i < size; i++) {
            resultArr.push(i)
        }
        resultArr.reverse()
        return resultArr
    },
    getSizeArr: function(size) {
        if (isNaN(size)) {
            console.log('getSizeArr error')
            return
        }
        size = size * 1
        var resultArr = []
        for (var i = 0; i < size; i++) {
            resultArr.push(i)
        }
        return resultArr
    },
    removeChild(domTarget) {
        while (domTarget.hasChildNodes()) { domTarget.removeChild(domTarget.firstChild); }
    },
    makeFloorButtons(dom, arr, funcName) {
        if (!Array.isArray(arr)) {
            console.log('getSizeArr error')
            return
        }

        arr.forEach(function(floorNum) {
            dom.innerHTML += ("<div class='floorButton'><button class='floorButton' onClick='" + FLOOR_CONST.onClickFloorFuncName + "(" + (floorNum + 1) + ")' id='" + FLOOR_CONST.floorId + (floorNum + 1) + "'>floor " + (floorNum + 1) + "</button></div>")
        })
    },
    makeElevator(dom, arr, floorSize) {
        if (!Array.isArray(arr)) {
            console.log('getSizeArr error')
            return
        }
        var elevatorHeight = dom.clientHeight / floorSize
        arr.forEach(function(elevalorNum) {
            dom.innerHTML += ("<div class='elevatorLine'><div class='elevator' id='elevator" + (elevalorNum + 1) + "' style='height:" + elevatorHeight + "px;'>엘레베이터" + (elevalorNum + 1) + "</div></div>")
        })
        var domElevatorList = dom.querySelectorAll('.elevator')
        domElevatorList.forEach(function(elevator) {
            elevator.style.bottom = 0
        })
    },
    inputValidate: function(floorSize, ElevatorSize) {
        var numberFloor = parseInt(floorSize, 10)
        var numberElevator = parseInt(ElevatorSize, 10)
        if (!numberFloor || !numberElevator) {
            return false
        }
        if (2 > numberFloor || numberFloor > 5) {
            return false
        }
        if (2 > numberElevator || numberElevator > 4) {
            return false
        }

        return true
    }
}