import {Elevator} from './Elevator.js';
import {ContainerInButton, ContainerInElevator} from './Container.js';

class Building {
	constructor(elevatorSize, floorSize) {
		this.list = [];
		this.floorSize = floorSize;
		this.elevatorSize = elevatorSize;
		this.containerSize = elevatorSize*2+1;
		this.structure(this.containerSize, this.floorSize);
	}


	structure(containerSize, floorSize){
		let elevatorId = 0;
		for (let i=0;i<floorSize;i++){
			let list = [];
			for (let j=0;j<containerSize;j++){
				if (j%2 == 1){
					let container = new ContainerInElevator(j,i);
					if (i == 0 ){
						elevatorId++;
						container.Elevator = new Elevator(elevatorId,j);
					}
					list.push(container);
				}else{
					let container = new ContainerInButton(j,i);
					list.push(container);
				}
			}
			this.list.push(list);
		}
	}
}


export {Building};
