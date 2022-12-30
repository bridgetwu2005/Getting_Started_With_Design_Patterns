"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Shape_1 = require("./Shape");
/**
 * implement shape detail and draw Square
 */
class Square extends Shape_1.Shape {
    draw() {
        console.log("Draw Square");
    }
}
exports.Square = Square;
