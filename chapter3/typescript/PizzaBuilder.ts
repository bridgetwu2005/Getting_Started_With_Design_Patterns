import { Pizza } from "./Pizza";

/**
 * PizzaBuilder interface defines common build method
 * 
 * @Author: Bridget
 */
 export interface PizzaBuilder {

    addSauce(sauce: string): PizzaBuilder;
    addTopping(topping: string): PizzaBuilder;
    buildSize(size: string): PizzaBuilder;
    createPizza(): PizzaBuilder;
    getPizza(): Pizza;

}
