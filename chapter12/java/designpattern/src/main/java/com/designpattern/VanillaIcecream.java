package com.designpattern;

/**
 * Base Component Implementation. We will add different type of Icecreams based on Vanilla Icecream.
 * <p>
 *
 * @Author Bridget Wu
 */
public class VanillaIcecream implements Icecream {
    /**
     * make Vanilla Icecream
     *
     * @return
     */
    @Override
    public String makeIcecream() {
        return "Make Vanilla Icecream";
    }
}