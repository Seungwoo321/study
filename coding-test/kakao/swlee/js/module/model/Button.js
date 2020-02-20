class Button {
	constructor(){
		this.push = false;
	}
}

class InnerButton extends Button {
	constructor(){
		super();

	}
}

class OuterButton extends Button {
	constructor(){
		super();

	}
}


class ButtonContainer {
	constructor(type){
		this.type = type;

	}

	get makeButton(){
		if (this.type == ''){
			return new InnerButton();
		}else{
			return new OuterButton();
		}
	}

}


export {ButtonContainer};
