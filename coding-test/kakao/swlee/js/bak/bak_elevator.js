var Wall = function(floorSize){

	this.floor = floorSize;
	this.elevator = 3;


	var plusContainer = function(){
		this.floor++;
		this.elevator++;
		this.between++;
	};
	var minusContainer = function(){
		this.floor--;
		this.elevator--;
		this.between--;
	};

	this.minus = function(){
		minusContainer();
	};

	this.plus = function(){
		plusContainer();
	};


	this.init = function(){
		this.floor = 2;
		this.elevator = 1;

		if (this.elevator == 1){
			this.between = 1;
		}else{
			this.between = this.elevator-1;
		}
	};

	this.init();
};


var Elevator = function(){
	this.state = {
		no : 0,
		floor : 0
	};
};
