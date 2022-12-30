import { ShapeFactory } from "./ShapeFactory";

//create an circle object and call its draw method.
let circle = ShapeFactory.createShape("CIRCLE");
//call draw method of Circle
circle.draw();

//create an circle object and call its draw method.
let oval = ShapeFactory.createShape("OVAL");
//call draw method of oval
oval.draw();

//create an Square object and call its draw method.
let square = ShapeFactory.createShape("SQUARE");

//call draw method of square
square.draw();