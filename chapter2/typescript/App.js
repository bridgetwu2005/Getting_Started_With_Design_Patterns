"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShapeFactory_1 = require("./ShapeFactory");
//create an circle object and call its draw method.
let circle = ShapeFactory_1.ShapeFactory.createShape("CIRCLE");
//call draw method of Circle
circle.draw();
//create an circle object and call its draw method.
let oval = ShapeFactory_1.ShapeFactory.createShape("OVAL");
//call draw method of oval
oval.draw();
//create an Square object and call its draw method.
let square = ShapeFactory_1.ShapeFactory.createShape("SQUARE");
//call draw method of square
square.draw();
