package com.designpattern;

/**
 * USAppliance defines standard 110 volt electrical outlets in US
 *
 * @Author: Bridget
 */
public interface USAppliance {

    default int getUSStandardVolt() {
        return 110;
    }

    /**
     * check input voltage is follow US Appliance Standard
     *
     * @param volt
     * @return
     */
    default boolean checkVoltageCompatible(int volt) {
        if (volt != getUSStandardVolt()) {
            return false;
        }
        return true;
    }

    void run(int volt);
}
