import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Square } from "./Square";


let circleShape: Shape = new Circle();
let squareShape: Shape = new Square();
circleShape.draw();
squareShape.draw()


function  add(x: string, y: string): string;
function  add(x: number, y: number): number;
function add(x: any, y:any): any {
    return x + y;
}

console.log(add("Hello ", "Polymorphism"))
console.log(add(1, 2))
 
