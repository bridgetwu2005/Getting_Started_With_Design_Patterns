package com.designpattern;

/**
 * CheesePizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Cheese pizza.
 *
 * @Author Bridget Wu
 */
public class CheesePizza extends Pizza {
    /**
     * add Cheese topping
     */
    @Override
    void addTopping() {
        System.out.println("=== Add Cheese topping === ");
    }
}
