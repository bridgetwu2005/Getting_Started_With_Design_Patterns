import { EuropeanAppliance } from "./EuropeanAppliance";


/**
 * EuropeanCoffeeMachine implements run method which make sure input voltage can run European Coffee Machine
 *
 * @Author: Bridget
 */
export class EuropeanCoffeeMachine extends EuropeanAppliance {

    /**
     * check voltage input is 220 and can run European Coffee Machine to Brew Coffee
     *
     * @param volt
     */
     public run(volt: number): void{
         let isVoltCompatible = this.checkVoltageCompatible(volt);
         console.log("EuropeanCoffeeMachine: Input Voltage is ", volt);
         if (!isVoltCompatible) {
            console.log("Voltage - (" + volt + ") is not supported to use European Coffee Machine");
         } else {
            console.log("Brew Coffee!");
         }
     }
}
