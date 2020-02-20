class Elevator{
	constructor(moveStatus, floorNum, wallNum, elevatorId){
		this.moveStatus = moveStatus;
		this.floorNum = floorNum;
		this.wallNumb = wallNum;
		this.elevatorId = elevatorId;
	}
}
class ElevatorService{
	constructor(){
		this.elevator = new Elevator();
	}
}

export {Elevator, ElevatorService};
