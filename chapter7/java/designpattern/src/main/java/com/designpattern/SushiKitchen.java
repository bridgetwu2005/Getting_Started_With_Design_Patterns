package com.designpattern;

import java.util.List;

/**
 * Sushi Kitchen will prepare and make Sushi per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class SushiKitchen implements Kitchen {
    /**
     * make sushi food based on customer order items
     *
     * @param items
     */
    @Override
    public void makeFood(List<String> items) {
        if (!items.isEmpty()) {
            System.out.println("make Sushi:[");
            for (String item : items) {
                System.out.println(" {" + item + "} ");
            }
            System.out.println("]");
        }
    }
}

