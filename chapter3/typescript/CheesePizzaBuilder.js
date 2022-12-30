"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheesePizzaBuilder = void 0;
const Pizza_1 = require("./Pizza");
/**
 * CheesePizzaBuilder implements  PizzaBuilder interface
 * createPizza will set the pizza name as Cheese Pizza and add Cheese topping.
 *
 * @Author: Bridget
 */
class CheesePizzaBuilder {
    addSauce(sauce) {
        this.pizza.addSauces(sauce);
        return this;
    }
    addTopping(topping) {
        this.pizza.addToppings(topping);
        return this;
    }
    buildSize(size) {
        this.pizza.setSize(size);
        return this;
    }
    createPizza() {
        this.pizza = new Pizza_1.Pizza("Cheese Pizza");
        this.addCheese();
        return this;
    }
    addCheese() {
        this.pizza.addToppings("Cheese");
        return this;
    }
    getPizza() {
        return this.pizza;
    }
}
exports.CheesePizzaBuilder = CheesePizzaBuilder;
