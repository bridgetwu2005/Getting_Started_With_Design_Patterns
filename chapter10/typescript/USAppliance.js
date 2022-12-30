"use strict";
/**
 * USAppliance defines standard 110 volt electrical outlets in US
 *
 * @Author: Bridget
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.USAppliance = void 0;
class USAppliance {
    getUSStandardVolt() {
        return 110;
    }
    /**
     * check input voltage is follow US Appliance Standard
     *
     * @param volt
     * @return
     */
    checkVoltageCompatible(volt) {
        if (volt != this.getUSStandardVolt()) {
            return false;
        }
        return true;
    }
}
exports.USAppliance = USAppliance;
