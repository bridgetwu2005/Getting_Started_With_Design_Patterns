package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * Pizza class
 *
 * @Author: Bridget
 */
public class Pizza {

    private String name;

    private String size;

    private List<String> toppings = new ArrayList<>();

    private List<String> sauces = new ArrayList<>();

    public Pizza(String name) {
        this.name = name;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public List<String> getToppings() {
        return toppings;
    }

    public void addToppings(String topping) {
        this.toppings.add(topping);
    }

    public List<String> getSauces() {
        return sauces;
    }

    public void addSauces(String sauce) {
        this.sauces.add(sauce);
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "name='" + name + '\'' +
                ", size='" + size + '\'' +
                ", toppings=" + toppings +
                ", sauces=" + sauces +
                '}';
    }
}
