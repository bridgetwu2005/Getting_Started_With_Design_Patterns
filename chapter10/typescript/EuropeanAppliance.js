"use strict";
/**
 * EuropeanAppliance defines standard 220 volt electrical outlets in European
 *
 * @Author: Bridget
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EuropeanAppliance = void 0;
class EuropeanAppliance {
    getEUStandardVolt() {
        return 220;
    }
    /**
     * check input voltage is follow European Appliance Standard
     *
     * @param volt
     * @return
     */
    checkVoltageCompatible(volt) {
        if (volt != this.getEUStandardVolt()) {
            return false;
        }
        return true;
    }
}
exports.EuropeanAppliance = EuropeanAppliance;
