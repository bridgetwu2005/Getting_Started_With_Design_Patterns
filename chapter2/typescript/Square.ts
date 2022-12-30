import { Shape } from "./Shape";
/**
 * Factory Pattern - Square Shape
 * @author: bridget
 */
export class Square  implements Shape {

    /**
    * draw Square shape
    *
    */
     public draw(): void {
        console.log("Draw Square.");
     }
 }