"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniPizza = void 0;
const Pizza_1 = require("./Pizza");
/**
 * PepperoniPizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Pepperoni pizza.
 *
 * @Author Bridget Wu
 */
class PepperoniPizza extends Pizza_1.Pizza {
    /**
     * add Pepperoni topping
     */
    addTopping() {
        console.log("=== Add Pepperoni topping === ");
    }
}
exports.PepperoniPizza = PepperoniPizza;
