/**
 * Factory Pattern - Oval Shape
 * @author: bridget
 */

import { Shape } from "./Shape";

 export class Oval implements Shape {

    /**
    * draw oval shape
    *
    */
    public draw(): void {
       console.log("Draw Oval.");
    }
 }