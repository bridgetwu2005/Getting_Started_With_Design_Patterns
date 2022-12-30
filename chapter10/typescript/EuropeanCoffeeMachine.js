"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EuropeanCoffeeMachine = void 0;
const EuropeanAppliance_1 = require("./EuropeanAppliance");
/**
 * EuropeanCoffeeMachine implements run method which make sure input voltage can run European Coffee Machine
 *
 * @Author: Bridget
 */
class EuropeanCoffeeMachine extends EuropeanAppliance_1.EuropeanAppliance {
    /**
     * check voltage input is 220 and can run European Coffee Machine to Brew Coffee
     *
     * @param volt
     */
    run(volt) {
        let isVoltCompatible = this.checkVoltageCompatible(volt);
        console.log("EuropeanCoffeeMachine: Input Voltage is ", volt);
        if (!isVoltCompatible) {
            console.log("Voltage - (" + volt + ") is not supported to use European Coffee Machine");
        }
        else {
            console.log("Brew Coffee!");
        }
    }
}
exports.EuropeanCoffeeMachine = EuropeanCoffeeMachine;
