"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USCoffeeMachine = void 0;
const USAppliance_1 = require("./USAppliance");
/**
 * USCoffeeMachine implements run method which make sure input voltage can run US Coffee Machine
 *
 * @Author: Bridget
 */
class USCoffeeMachine extends USAppliance_1.USAppliance {
    /**
     * check voltage input is 110 and can run US Coffee Machine to Brew Coffee
     *
     * @param volt
     */
    run(volt) {
        let isVoltCompatible = this.checkVoltageCompatible(volt);
        console.log("USCoffeeMachine: Input Voltage is ", volt);
        if (!isVoltCompatible) {
            console.log("Voltage - (" + volt + ") is not supported to use US Coffee Machine");
        }
        else {
            console.log("Brew Coffee!");
        }
    }
}
exports.USCoffeeMachine = USCoffeeMachine;
