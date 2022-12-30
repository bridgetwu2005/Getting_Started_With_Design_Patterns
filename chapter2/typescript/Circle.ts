import { Shape } from "./Shape";

/**
 * Factory Pattern - Square Shape
 *
 * @author: bridget
 */
 export  class Circle implements Shape {

    /**
     * draw circle shape
     */

    public draw(): void {
        console.log("Draw circle.");
     }
}