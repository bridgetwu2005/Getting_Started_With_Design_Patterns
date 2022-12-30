"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USApplianceAdapter = void 0;
const EuropeanAppliance_1 = require("./EuropeanAppliance");
/**
 * USApplianceAdapter as Adapter implements EuropeanAppliance and convert European Volt to to US Volt
 * This conversion make incompatable USAppliance run on European.
 *
 * @Author: Bridget
 */
class USApplianceAdapter extends EuropeanAppliance_1.EuropeanAppliance {
    constructor(usCoffeeMachine) {
        // must call super()
        super();
        this.usCoffeeMachine = usCoffeeMachine;
    }
    /**
     * the method check input voltage can run USCoffeeMachine. If voltage is higher than US Appliance standard - 110 voltage,
     * it will automatically convert volt (from 220 to 110). Then run USCoffeeMachine to brew coffee.
     *
     * @param volt
     */
    run(volt) {
        let diff = volt - this.usCoffeeMachine.getUSStandardVolt();
        let convertedVolt = 0;
        if (diff != 0) {
            convertedVolt = this.convertEuropeanToUSVolt(volt, diff);
            console.log("USPApplianceAdapter converted Input voltage from " + volt + " to " + convertedVolt);
        }
        console.log("Run USCoffeeMachine");
        this.usCoffeeMachine.run(convertedVolt);
    }
    /**
     * convert European volt to US volt
     *
     * @param volt
     * @param diff
     * @return number of vaolt
     */
    convertEuropeanToUSVolt(volt, diff) {
        return volt - diff;
    }
}
exports.USApplianceAdapter = USApplianceAdapter;
