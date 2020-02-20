

class Elevator{
	constructor(id,container){
		this.id = id;
		this.container = container;
		this.floor = 0;
		this.status = 0;
	}
	get Position(){
		let x = this.floor;
		let y = this.container;

		return {x,y};
	}
	set Elevator(floor){
		this.floor = floor;
	}
}

export {Elevator} ;
