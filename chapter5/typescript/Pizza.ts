import { PizzaRequest } from "./PizzaRequest";

/**
 * Abstract class Pizza contains template method preparePizza which defines the algorithm/steps to prepare pizza with abstract methods.
 *
 * @Author Bridget Wu
 */
 export abstract class Pizza {
    /**
     * preparePizza is template method
     *
     * @param pizzaRequest
     */
     public order(pizzaRequest: PizzaRequest): void {
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
     private preparePizza(): void {
        console.log("=== prepare pizza ===");
        console.log(" -> Prepare Pizza Material");
        console.log(" -> Make the Dough");
        console.log(" -> Shape the dough");
    }

    /**
     * addTopping is abstract method, the subclass need implements this method
     */
    abstract addTopping(): void

    /**
     * addMoreToppings method don't add any toppings by default. Subclass can overwrite this method to add their own toppings
     *
     * @param pizzaRequest
     */
     protected addMoreToppings(pizzaRequest: PizzaRequest): void {
        let toppings = pizzaRequest.getToppings();
        if (toppings.length >0) {
            console.log("add topping:[");
            for (let topping of toppings) {
                console.log(" (" + topping + ")");
            }
            console.log(" ]");
        }

    }

    /**
     * addSauces method don't add any sauces by default. Subclass can overwrite this method to add their own sauces
     * 
     */
     protected addSauces(pizzaRequest: PizzaRequest): void {
        let sauces = pizzaRequest.getSauces();
        if (sauces.length >0) {
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
    private  bakePizza(): void {
        console.log("=== Bake pizza ===");

    }
}
