import { Pizza } from "./Pizza";

/**
 * PepperoniPizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Pepperoni pizza.
 *
 * @Author Bridget Wu
 */
 export class PepperoniPizza extends Pizza {
    /**
     * add Pepperoni topping
     */
     addTopping(): void {
        console.log("=== Add Pepperoni topping === ");
    }
}