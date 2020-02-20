
class Elevator{
	constructor(id, position, status){
		this.id = id;
		this.position = position;
		this.status = status;
		this.name = id + '호기';
	}
}


module.exports = Elevator; 
