package com.designpattern;

/**
 * PizzaBuilder interface defines common build method
 *
 * @Author: Bridget
 */
public interface PizzaBuilder {
    PizzaBuilder addSauce(String sauce);

    PizzaBuilder addTopping(String topping);

    PizzaBuilder buildSize(String size);

    PizzaBuilder createPizza();

    Pizza getPizza();
}
