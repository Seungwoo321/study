var Building = require('../module/Building');



let building = Building(3,2);


var wallarr = function(){
	var wallArr = [];
	var wallSize = building.wallSize();
	for (var i=0;i<wallSize;i++){
		wallArr.push(document.createElement('div').classList.add('wall'));
	}
	return wallArr;
};


var floorArr = function(){
	var floorArr = [];
	var wallArr = wallArr();
	var floorSize = building.floorSize();
	for (var i=0;i<floorSize;i++){
		var domFloorCreated = document.createElement('div').setAttribute('class','floor');
		wallArr.forEach(function(){
			domFloorCreated.appendChild(this);
		});
		floorArr.push(domFloorCreated);
	}
	return floorArr;
};

var buildingConstruct = function(){
	var floorSize = floorSize();
	var floorArr = floorArr();
	floorArr.forEach(function(){
		this.domBuildingId.appendChild(this);
	});
};

buildingConstruct();
