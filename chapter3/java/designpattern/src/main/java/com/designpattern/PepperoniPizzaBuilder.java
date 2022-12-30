package com.designpattern;

/**
 * PepperoniPizzaBuilder implements  PizzaBuilder interface
 * createPizza will set the pizza name as Pepperoni Pizza and add Pepperoni topping.
 *
 * @Author: Bridget
 */
public class PepperoniPizzaBuilder implements PizzaBuilder {

    private Pizza pizza;

    public PizzaBuilder createPizza() {
        this.pizza = new Pizza("Pepperoni Pizza");
        addPepperoni();
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

    public PizzaBuilder addPepperoni() {
        this.pizza.addToppings("Pepperoni");
        return this;
    }

    public Pizza getPizza() {
        return this.pizza;
    }
}
