"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaRequest = void 0;
/**
 * Pizza request sending from client request
 *
 * @Author Bridget Wu
 */
class PizzaRequest {
    constructor() {
        this.sauces = [];
        this.toppings = [];
    }
    getSauces() {
        return this.sauces;
    }
    /**
     * add a sauce
     *
     * @param sauce
     */
    addSauce(sauce) {
        this.sauces.push(sauce);
    }
    getToppings() {
        return this.toppings;
    }
    /**
     * add a topping
     *
     * @param topping
     */
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
exports.PizzaRequest = PizzaRequest;
