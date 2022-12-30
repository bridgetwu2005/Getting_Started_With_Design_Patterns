package com.designpattern;

import java.util.List;

/**
 * Noodle Kitchen will prepare and cook Noodle per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class NoodleKitchen implements Kitchen {
    /**
     * make noodle food based on customer order items
     *
     * @param items
     */
    @Override
    public void makeFood(List<String> items) {
        if (!items.isEmpty()) {
            System.out.println("cook Noodle:[");
            for (String item : items) {
                System.out.println(" {" + item + "} ");
            }
            System.out.println("]");
        }

    }
}
