import { Circle } from "./Circle";
import { Oval } from "./Oval";
import { Shape } from "./Shape";
import { Square } from "./Square";

/**
 * Factory Pattern - ShapeFactory
 *
 * @author: bridget
 */
 export class ShapeFactory {
    static createShape(shapeType: String): Shape {
        if ("CIRCLE"==shapeType) {
            return new Circle();

        } else if ("OVAL"== shapeType) {
            return new Oval();

        } else if ("SQUARE" == shapeType) {
            return new Square();
        }
        throw new Error("Shape is not supported: " + shapeType);
    }
}
