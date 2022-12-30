package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * Chapter 3: Builder Design Pattern
 * The Builder Design Pattern creates builder classes to encapsulate the logic to instantiate complex objects step by step. 
 * The final step will create a different representation object and return it.
 * 
 * @Author Bridget Wu
 */
public class App {
    public static void main(String[] args) {

        PizzaBuilder pepperoniPizzaBuilder = new PepperoniPizzaBuilder();

        pepperoniPizzaBuilder.createPizza()
                .buildSize("LARGE")
                .addTopping("Mushrooms")
                .addTopping("Onions")
                .addSauce("Buffalo Sauce");

        Pizza pepperoniPizza = pepperoniPizzaBuilder.getPizza();
        System.out.println(pepperoniPizza);

        PizzaBuilder cheesePizzaBuilder = new CheesePizzaBuilder();

        cheesePizzaBuilder.createPizza()
                .buildSize("SMALL")
                .addTopping("Green pepper")
                .addTopping("Tomato")
                .addSauce("Barbecue Sauce");

        Pizza cheesePizza = cheesePizzaBuilder.getPizza();
        System.out.println(cheesePizza);
    }
}
