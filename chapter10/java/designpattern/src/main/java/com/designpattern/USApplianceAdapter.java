package com.designpattern;

/**
 * USApplianceAdapter as Adapter implements EuropeanAppliance and convert European Volt to to US Volt
 * This conversion make incompatable USAppliance run on European.
 *
 * @Author: Bridget
 */

public class USApplianceAdapter implements EuropeanAppliance {

    private USCoffeeMachine usCoffeeMachine;

    public USApplianceAdapter(USCoffeeMachine usCoffeeMachine) {
        this.usCoffeeMachine = usCoffeeMachine;
    }

    /**
     * the method check input voltage can run USCoffeeMachine. If voltage is higher than US Appliance standard - 110 voltage,
     * it will automatically convert volt (from 220 to 110). Then run USCoffeeMachine to brew coffee.
     *
     * @param volt
     */
    public void run(int volt) {
        int diff = volt - usCoffeeMachine.getUSStandardVolt();
        int convertedVolt = 0;
        if (diff != 0) {
            convertedVolt = convertEuropeanToUSVolt(volt, diff);
            System.out.println("USPApplianceAdapter converted Input voltage from " + volt + " to " + convertedVolt);
        }
        System.out.println("Run USCoffeeMachine");
        usCoffeeMachine.run(convertedVolt);
    }

    /**
     * convert European volt to US volt
     *
     * @param volt
     * @param diff
     * @return
     */
    private int convertEuropeanToUSVolt(int volt, int diff) {
        return volt - diff;
    }
}
