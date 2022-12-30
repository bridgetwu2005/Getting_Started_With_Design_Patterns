import { Pizza } from "./Pizza";
import { PizzaBuilder } from "./PizzaBuilder";

/**
 * PepperoniPizzaBuilder implements  PizzaBuilder interface
 * createPizza will set the pizza name as Pepperoni Pizza and add Pepperoni topping.
 * 
 * @Author: Bridget
 */

export class PepperoniPizzaBuilder implements PizzaBuilder {

    private pizza!: Pizza;

    public addSauce(sauce: string): PizzaBuilder {
        this.pizza.addSauces(sauce);
        return this;
    }
    public addTopping(topping: string): PizzaBuilder {
        this.pizza.addToppings(topping);
        return this;
    }
    public buildSize(size: string): PizzaBuilder {
        this.pizza.setSize(size);
        return this;
    }
    createPizza(): PizzaBuilder {
        this.pizza = new Pizza("Pepperoni Pizza");
        this.addPepperoni();
        return this;
    }

    public addPepperoni(): PizzaBuilder {
        this.pizza.addToppings("Pepperoni");
        return this;
    }

    public getPizza(): Pizza {
        return this.pizza;
    }
}