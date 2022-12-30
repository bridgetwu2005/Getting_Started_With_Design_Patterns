"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniPizzaBuilder = void 0;
const Pizza_1 = require("./Pizza");
/**
 * PepperoniPizzaBuilder implements  PizzaBuilder interface
 * createPizza will set the pizza name as Pepperoni Pizza and add Pepperoni topping.
 *
 * @Author: Bridget
 */
class PepperoniPizzaBuilder {
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
        this.pizza = new Pizza_1.Pizza("Pepperoni Pizza");
        this.addPepperoni();
        return this;
    }
    addPepperoni() {
        this.pizza.addToppings("Pepperoni");
        return this;
    }
    getPizza() {
        return this.pizza;
    }
}
exports.PepperoniPizzaBuilder = PepperoniPizzaBuilder;
