import { Pizza } from "./Pizza";

/**
 * CheesePizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Cheese pizza.
 *
 * @Author Bridget Wu
 */
 export class CheesePizza extends Pizza {
    /**
     * add Cheese topping
     */
     addTopping(): void {
        console.log("=== Add Cheese topping === ");
    }
}
