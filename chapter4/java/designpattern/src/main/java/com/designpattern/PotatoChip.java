package com.designpattern;

/**
 * PotatoChip product information
 *
 * @Author Bridget Wu
 */
public class PotatoChip implements Product {
    private int id = 2;

    private String name = "Potato Chip";

    private int price;

    public PotatoChip(int price) {
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

