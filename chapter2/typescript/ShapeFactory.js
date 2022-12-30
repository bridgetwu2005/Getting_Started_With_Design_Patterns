"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeFactory = void 0;
const Circle_1 = require("./Circle");
const Oval_1 = require("./Oval");
const Square_1 = require("./Square");
/**
 * Factory Pattern - ShapeFactory
 *
 * @author: bridget
 */
class ShapeFactory {
    static createShape(shapeType) {
        if ("CIRCLE" == shapeType) {
            return new Circle_1.Circle();
        }
        else if ("OVAL" == shapeType) {
            return new Oval_1.Oval();
        }
        else if ("SQUARE" == shapeType) {
            return new Square_1.Square();
        }
        throw new Error("Shape is not supported: " + shapeType);
    }
}
exports.ShapeFactory = ShapeFactory;
