
import {Building} from '../module/model/Building.js';
import {Rendering} from '../module/view/Rendering.js';

let elevatorSize = 3;
let floorSize = 3;
let building = new Building(elevatorSize, floorSize);


let render = new Rendering(building);


//console.log(building);
console.log(render);
