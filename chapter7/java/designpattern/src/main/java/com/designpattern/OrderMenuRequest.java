package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * client menu order requests, they can order multiple noodle, sushi, tempura items
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class OrderMenuRequest {

    private List<String> noodleItems = new ArrayList<>();

    private List<String> sushiItems = new ArrayList<>();

    private List<String> tempuraItems = new ArrayList<>();

    /**
     * get all noodle orders
     *
     * @return
     */
    public List<String> getNoodleItems() {
        return noodleItems;
    }

    /**
     * add a noodle order
     *
     * @param item
     */
    public void addNoodleItem(String item) {
        noodleItems.add(item);
    }

    /**
     * get all sushi orders
     *
     * @return
     */
    public List<String> getSushiItems() {
        return sushiItems;
    }

    /**
     * add a sushi order
     *
     * @param item
     */
    public void addSushiItem(String item) {
        sushiItems.add(item);
    }

    /**
     * get all tempura orders
     *
     * @return
     */
    public List<String> getTempuraItems() {
        return tempuraItems;
    }

    /**
     * add a tempura order
     *
     * @param item
     */
    public void addTempuraItem(String item) {
        tempuraItems.add(item);
    }
}
