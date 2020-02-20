

class Container{
	constructor(id, floor){
		this.id = id;
		this.postion = {floor, id};
	}
}

class ContainerInButton extends Container{
	constructor(id, floor){
		super(id, floor);
		this.type = 'BUTTON_CONTAINER';
	}
}


class ContainerInElevator extends Container{
	constructor(id, floor){
		super(id, floor);
		this.Elevator = {};
		this.type = 'ELEVATOR_CONTAINER';
	}
}

export {ContainerInButton, ContainerInElevator} ;
//export {Container} ;
