package com.designpattern.abstraction;

/**
 * Method overloading polymorphism
 */
public class Calculator {

    /**
     * Method add with 2 integer parameters
     *
     * @param a
     * @param b
     * @return
     */
    public static int add(int a, int b) {
        // Returns sum of integer numbers
        return a + b;
    }

    /**
     * Method add With same name but with 2 double parameters
     *
     * @param a
     * @param b
     * @return
     */
    public static double add(double a, double b) {

        // Returns sum of double numbers
        return a + b;
    }
}
