package com.designpattern;

import java.util.List;

/**
 * Abstract class Pizza contains template method order which defines the algorithm/steps to prepare pizza with abstract methods.
 *
 * @Author Bridget Wu
 */
public abstract class Pizza {
    /**
     * preparePizza is template method
     *
     * @param pizzaRequest
     */
    protected final void order(PizzaRequest pizzaRequest) {
        // Prepare Pizza Base
        preparePizza();
        addTopping();
        // Add Sauces
        addSauces(pizzaRequest);
        // Add Toppings
        addMoreToppings(pizzaRequest);
        // Bake Pizza
        bakePizza();
    }

    /**
     * prepare Pizza Base. This is private final method, no accessible by subclass
     * subclass can't call or overwrite this method
     * all pizza class will call preparePizzaBase
     */
    private final void preparePizza() {
        System.out.println("=== prepare pizza ===");
        System.out.println(" -> Prepare Pizza Material");
        System.out.println(" -> Make the Dough");
        System.out.println(" -> Shape the dough");
    }

    /**
     * addTopping is abstract method, the subclass need implements this method
     */
    abstract void addTopping();

    /**
     * addMoreToppings method don't add any toppings by default. Subclass can overwrite this method to add their own toppings
     *
     * @param pizzaRequest
     */
    protected void addMoreToppings(PizzaRequest pizzaRequest) {
        List<String> toppings = pizzaRequest.getToppings();
        if (!toppings.isEmpty()) {
            System.out.print("add topping:[");
            for (String topping : toppings) {
                System.out.print(" (" + topping + ")");
            }
            System.out.println(" ]");
        }

    }

    /**
     * addSauces method don't add any sauces by default. Subclass can overwrite this method to add their own sauces
     * 
     */
    protected void addSauces(PizzaRequest pizzaRequest) {
        List<String> sauces = pizzaRequest.getSauces();
        if (!sauces.isEmpty()) {
            System.out.print("add sauces:[");
            for (String sauce : sauces) {
                System.out.print(" (" + sauce + ")");
            }
            System.out.println(" ]");
        }
    }

    /**
     * bake pizza. This is private final method, no accessible by subclass
     * subclass can't call or overwrite this method
     * all pizza class will call bakePizza
     */
    private final void bakePizza() {
        System.out.println("=== Bake pizza ===");

    }
}
