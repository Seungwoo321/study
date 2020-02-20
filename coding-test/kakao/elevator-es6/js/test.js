get wallSize(){
	return this.wallSize;
}
get floorSize(){
	return this.floorSize;
}
get wallArr(){
	var wallArr = [];
	var wallSize = this.wallSize(this.wallSize());
	for (var i=0;i<wallSize;i++){
		wallArr.push(document.createElement('div').classList.add('wall'));
	}
	return wallArr;
}
get floorArr(){
	var floorArr = [];
	var wallArr = this.wallArr();
	var floorSize = this.floorSize();
	for (var i=0;i<floorSize;i++){
		var domFloorCreated = document.createElement('div').setAttribute('class','floor');
		wallArr.forEach(function(){
			domFloorCreated.appendChild(this);
		});
		floorArr.push(domFloorCreated);
	}
	return floorArr;
}
buildingConstruct(){
	var floorSize = this.floorSize();
	var floorArr = this.floorArr(floorSize);
	floorArr.forEach(function(){
		this.domBuildingId.appendChild(this);
	});

}





/*
makeContainer(){
	var floors = document.getElementsByClassName('floor');
	for (var i=0;i<floors.length;i++){
		var container = document.createElement('div');
		container.classList.add('container');
		floors[i].appendChild(container);
	}
}
makeElevator(){
	var floors = document.getElementsByClassName('floor');
	var bottom = floors[floors.length-1];
	var containers = bottom.getElementsByClassName('container');
	for (var i=0;i<containers.length;i++){
		var elevator = document.createElement('div');
		elevator.classList.add('elevator');
		containers[i].appendChild(elevator);
		//this.makeinnerButton(elevator,floors.length);
	}
}
makeFloor(){
	var wall = document.getElementsByClassName('wall');
	var div = document.createElement('div');
	div.setAttribute('class','floor');
	wall[0].appendChild(div);
}
*/
/*
makeinnerButton(elevator,floorSize){
	var floors = floorSize;
	for (var i=0;i<floors;i++){
		var btn = document.createElement('button');
		btn.innerHTML = (i+1) +'층';
		btn.setAttribute('type','button');
		elevator.appendChild(btn);
	}
}
*/
/*
plusElevator(){
	this.elevator++;
}
plusFloor(){
	this.floor++;
}
minusElevator(){
	this.elevator--;
}
minusFloor(){
	this.floor--;
}
*/
draw(){
	for (var i=0;i<this.floor;i++){
		this.makeFloor();
	}
	for (var j=0;j<this.elevator;j++){
		if (j==0){
			this.makeContainer();
		}else{
			this.makeBetweenWall();
			this.makeContainer();
		}
	}
	this.makeElevator();
}
