var EventSenderUtil = {
    requiredValidate: function(required) {
        if (!required) {
            return false
        }
        var constsKey = Object.keys(EVENT_SENDER_CONST.required)
        var result = true
        constsKey.forEach((key) => {
            if (!required.hasOwnProperty(key)) {
                result = false
            }
        })

        return result;
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