package com.designpattern;

/**
 * PepperoniPizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Pepperoni pizza.
 *
 * @Author Bridget Wu
 */
public class PepperoniPizza extends Pizza {
    /**
     * add Pepperoni topping
     */
    @Override
    void addTopping() {
        System.out.println("=== Add Pepperoni topping === ");
    }
}