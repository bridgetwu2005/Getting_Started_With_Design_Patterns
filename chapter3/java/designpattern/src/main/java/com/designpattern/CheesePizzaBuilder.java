package com.designpattern;

/**
 * CheesePizzaBuilder implements  PizzaBuilder interface
 * createPizza will set the pizza name as Cheese Pizza and add Cheese topping.
 *
 * @Author: Bridget
 */
public class CheesePizzaBuilder implements PizzaBuilder {

    private Pizza pizza;

    public PizzaBuilder createPizza() {
        this.pizza = new Pizza("Cheese Pizza");
        addCheese();
        return this;
    }

    public PizzaBuilder addSauce(String sauce) {
        this.pizza.addSauces(sauce);
        return this;
    }

    public PizzaBuilder addTopping(String topping) {
        this.pizza.addToppings(topping);
        return this;
    }

    public PizzaBuilder buildSize(String size) {
        this.pizza.setSize(size);
        return this;
    }

    public PizzaBuilder addCheese() {
        this.pizza.addToppings("Cheese");
        return this;
    }

    public Pizza getPizza() {
        return this.pizza;
    }
}
