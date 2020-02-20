class Building {
	constructor(floorsize, elevatorsize) {
		this.structure = [];
		for (var i = 0; i < floorsize; i++) {
			this.structure.push(new Floor(i, elevatorsize));
		}
	}
	getStructure() {
		return this.structure;
	}

}


class Floor {
	constructor(floorid, elevatorsize) {
		this.floorid = floorid;
		this.containersize = elevatorsize + 1;
		this.elevatorsize = elevatorsize;
		this.container = [];
	}

	makeContainer() {
		for (var i = 0; i < this.containersize; i++) {
			this.container.push(new Container(i, this.floorid));
		}
	}
}


class Container {
	constructor(containerid, floorid) {
		this.containerid = containerid;
		this.floorid = floorid;
		this.elevatorid = 0;
		this.containerkey = '';
	}
	mykey() {
		if (this.containerid % 2 == 0) {
			this.containerkey = 'WALL';
		} else {
			this.containerkey = 'ELEVATOR';
		}
	}

	cameElevator(elevatorid) {
		this.elevatorid = elevatorid;
		return this;
	}
	goingElevator() {
		return new Container(this.wallid, this.floorid);
	}


}


export { Building };
