package com.designpattern;

/**
 * EuropeanAppliance defines standard 220 volt electrical outlets in European
 *
 * @Author: Bridget
 */

public interface EuropeanAppliance {

    default int getEUStandardVolt() {
        return 220;
    }

    /**
     * check input voltage is follow European Appliance Standard
     *
     * @param volt
     * @return
     */
    default boolean checkVoltageCompatible(int volt) {
        if (volt != getEUStandardVolt()) {
            return false;
        }
        return true;
    }

    /**
     * run European Appliance
     *
     * @param volt
     */
    void run(int volt);
}
