"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheesePizza = void 0;
const Pizza_1 = require("./Pizza");
/**
 * CheesePizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Cheese pizza.
 *
 * @Author Bridget Wu
 */
class CheesePizza extends Pizza_1.Pizza {
    /**
     * add Cheese topping
     */
    addTopping() {
        console.log("=== Add Cheese topping === ");
    }
}
exports.CheesePizza = CheesePizza;
