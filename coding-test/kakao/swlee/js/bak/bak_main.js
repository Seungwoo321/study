





var makeContainer = function(){
	var floors = document.getElementsByClassName('floor');
	for (var i=0;i<floors.length;i++){

		var container = document.createElement('div');
		container.classList.add('container');
		floors[i].appendChild(container);
	}
};



var makeBetweenWall = function(){
	var floors = document.getElementsByClassName('floor');
	for (var i=0;i<floors.length;i++){

		var betweenWall = document.createElement('div');
		betweenWall.classList.add('container-between');
		betweenWall.innerHTML = '<div class="button-box"><button type="button" class="btnUp">UP</button><button type="button" class="btnDown">DOWN</button></div>';
		floors[i].appendChild(betweenWall);


	}
};

var makeElevator = function(){
	var floors = document.getElementsByClassName('floor');
	var bottom = floors[floors.length-1];
	var containers = bottom.getElementsByClassName('container');
	for (var i=0;i<containers.length;i++){
		var elevator = document.createElement('div');
		elevator.classList.add('elevator');
		containers[i].appendChild(elevator);
	}
};



var makeFloor = function(){
	var wall = document.getElementsByClassName('wall');
	var div = document.createElement('div');
	div.setAttribute('class','floor');
	wall[0].appendChild(div);
};


var plusElevator = function(){
	makeBetweenWall();
	makeContainer();
	makeElevator();
};


(function(){
	
	var wall = new Wall(3);

	wall.elevator = 4;
	wall.floor = 4;

	for (var i=0;i<wall.floor;i++){
		makeFloor();
	}
	for (var j=0;j<wall.elevator;i++){
		if (i==0){
			makeContainer();
		}else{
			makeBetweenWall();
			makeContainer();
		}
	}
	//makeElevator();

})();
