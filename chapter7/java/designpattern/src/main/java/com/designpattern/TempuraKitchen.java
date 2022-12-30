package com.designpattern;

import java.util.List;

/**
 * Tempura Kitchen will prepare and make Tempura per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class TempuraKitchen implements Kitchen {

    /**
     * make tempura food based on customer order items
     *
     * @param items
     */
    @Override
    public void makeFood(List<String> items) {
        if (!items.isEmpty()) {
            System.out.println("make Tempura:[");
            for (String item : items) {
                System.out.println(" {" + item + "} ");
            }
            System.out.println("]");
        }
    }
}
