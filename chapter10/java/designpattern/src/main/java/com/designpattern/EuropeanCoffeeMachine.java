package com.designpattern;

/**
 * EuropeanCoffeeMachine implements run method which make sure input voltage can run European Coffee Machine
 *
 * @Author: Bridget
 */

public class EuropeanCoffeeMachine implements EuropeanAppliance {

    /**
     * check voltage input is 220 and can run European Coffee Machine to Brew Coffee
     *
     * @param volt
     */
    @Override
    public void run(int volt) {
        boolean isVoltCompatible = checkVoltageCompatible(volt);
        System.out.println("EuropeanCoffeeMachine: Input Voltage is " + volt);
        if (!isVoltCompatible) {
            System.out.println("Voltage - (" + volt + ") is not supported to use European Coffee Machine");
        } else {
            System.out.println("Brew Coffee!");
        }
    }
}
