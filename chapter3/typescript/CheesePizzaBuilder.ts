import { Pizza } from "./Pizza";
import { PizzaBuilder } from "./PizzaBuilder";

/**
 * CheesePizzaBuilder implements  PizzaBuilder interface
 * createPizza will set the pizza name as Cheese Pizza and add Cheese topping.
 * 
 * @Author: Bridget
 */

export class CheesePizzaBuilder implements PizzaBuilder {
    
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
        this.pizza = new Pizza("Cheese Pizza");
        this.addCheese();
        return this;
    }

    public addCheese(): PizzaBuilder {
        this.pizza.addToppings("Cheese");
        return this;
    }

    public getPizza(): Pizza {
        return this.pizza;
    }
}