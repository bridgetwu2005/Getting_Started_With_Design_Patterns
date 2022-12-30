"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
/**
 * implement shape detail and draw circle
 */
class Circle extends Shape_1.Shape {
    draw() {
        console.log("Draw Circle");
    }
}
exports.Circle = Circle;
