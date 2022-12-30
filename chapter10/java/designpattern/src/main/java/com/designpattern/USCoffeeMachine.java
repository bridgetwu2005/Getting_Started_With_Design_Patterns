package com.designpattern;

/**
 * USCoffeeMachine implements run method which make sure input voltage can run US Coffee Machine
 *
 * @Author: Bridget
 */

public class USCoffeeMachine implements USAppliance {
    /**
     * check input voltage is 110 and can run US Coffee Machine to Brew Coffee
     *
     * @param volt
     */
    @Override
    public void run(int volt) {
        boolean isVoltCompatible = checkVoltageCompatible(volt);
        System.out.println("USCoffeeMachine: Input Voltage is " + volt);
        if (!isVoltCompatible) {
            System.out.println("Voltage (" + volt + ") is not supported to use US Coffee Machine");
        } else {
            System.out.println("Brew Coffee!");
        }
    }

}
