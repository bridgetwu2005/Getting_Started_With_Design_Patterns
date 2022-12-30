"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
/**
 * Abstract class Pizza contains template method preparePizza which defines the algorithm/steps to prepare pizza with abstract methods.
 *
 * @Author Bridget Wu
 */
class Pizza {
    /**
     * preparePizza is template method
     *
     * @param pizzaRequest
     */
    order(pizzaRequest) {
        // Prepare Pizza Base
        this.preparePizza();
        this.addTopping();
        // Add Sauces
        this.addSauces(pizzaRequest);
        // Add Toppings
        this.addMoreToppings(pizzaRequest);
        // Bake Pizza
        this.bakePizza();
    }
    /**
     * prepare Pizza Base. This is private final method, no accessible by subclass
     * subclass can't call or overwrite this method
     * all pizza class will call preparePizzaBase
     */
    preparePizza() {
        console.log("=== prepare pizza ===");
        console.log(" -> Prepare Pizza Material");
        console.log(" -> Make the Dough");
        console.log(" -> Shape the dough");
    }
    /**
     * addMoreToppings method don't add any toppings by default. Subclass can overwrite this method to add their own toppings
     *
     * @param pizzaRequest
     */
    addMoreToppings(pizzaRequest) {
        let toppings = pizzaRequest.getToppings();
        if (toppings.length > 0) {
            console.log("add topping:[");
            for (let topping of toppings) {
                console.log(" (" + topping + ")");
            }
            console.log(" ]");
        }
    }
    /**
     * addSauces method don't add any sauces by default. Subclass can overwrite this method to add their own sauces
     * subclass can't call or overwrite this method
     */
    addSauces(pizzaRequest) {
        let sauces = pizzaRequest.getSauces();
        if (sauces.length > 0) {
            console.log("add sauces:[");
            for (let sauce of sauces) {
                console.log(" (" + sauce + ")");
            }
            console.log(" ]");
        }
    }
    /**
     * bake pizza. This is private final method, no accessible by subclass
     * subclass can't call or overwrite this method
     * all pizza class will call bakePizza
     */
    bakePizza() {
        console.log("=== Bake pizza ===");
    }
}
exports.Pizza = Pizza;
