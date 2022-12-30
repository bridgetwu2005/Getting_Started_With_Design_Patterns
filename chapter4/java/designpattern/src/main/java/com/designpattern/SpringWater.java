package com.designpattern;

/**
 * SpringWater product information
 *
 * @Author Bridget Wu
 */
public class SpringWater implements Product {

    private int id = 1;

    private String name = "Spring Water";

    private int price;

    public SpringWater(int price) {
        this.price = price;
    }

    @Override
    public int getId() {
        return this.id;
    }

    @Override
    public int getPrice() {
        return this.price;
    }

    @Override
    public String getName() {
        return this.name;
    }
}
