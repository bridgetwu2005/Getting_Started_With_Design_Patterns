package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * Pizza request sending from client request
 *
 * @Author Bridget Wu
 */
public class PizzaRequest {

    List<String> sauces = new ArrayList<>();

    List<String> toppings = new ArrayList<>();

    public List<String> getSauces() {
        return sauces;
    }

    /**
     * add a sauce
     *
     * @param sauce
     */
    public void addSauce(String sauce) {
        this.sauces.add(sauce);
    }

    public List<String> getToppings() {
        return toppings;
    }

    /**
     * add a topping
     *
     * @param topping
     */
    public void addTopping(String topping) {
        this.toppings.add(topping);
    }
}
