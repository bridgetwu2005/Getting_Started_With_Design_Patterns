package com.designpattern;

/**
 *  Chapter 10 Adapter Design Pattern
 *  The adapter design pattern allows two incompatible interfaces to work together.
 * 
 * @Author Bridget
 */
public class App {
    public static void main(String[] args) {
        int currentVolt = 220;
        System.out.println("--> Run EuropeanAppliance under " + currentVolt + " volt");
        EuropeanAppliance euCoffeeMachine = new EuropeanCoffeeMachine();
        euCoffeeMachine.run(currentVolt);

        System.out.println();
        System.out.println("--> Run USCoffeeMachine under " + currentVolt + " volt");
        USCoffeeMachine usCoffeeMachine = new USCoffeeMachine();
        usCoffeeMachine.run(currentVolt);

        System.out.println();
        System.out.println("--> Run USCoffeeMachine through USApplianceAdapter under " + currentVolt + " volt");
        EuropeanAppliance usCoffeeMachineAdapter = new USApplianceAdapter(usCoffeeMachine);
        usCoffeeMachineAdapter.run(currentVolt);

    }
}
