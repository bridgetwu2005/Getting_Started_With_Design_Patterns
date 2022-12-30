import { USAppliance } from "./USAppliance";


/**
 * USCoffeeMachine implements run method which make sure input voltage can run US Coffee Machine
 *
 * @Author: Bridget
 */
export class USCoffeeMachine extends USAppliance {

    /**
     * check voltage input is 110 and can run US Coffee Machine to Brew Coffee
     *
     * @param volt
     */
     public run(volt: number): void{
         let isVoltCompatible = this.checkVoltageCompatible(volt);
         console.log("USCoffeeMachine: Input Voltage is ", volt);
         if (!isVoltCompatible) {
            console.log("Voltage - (" + volt + ") is not supported to use US Coffee Machine");
         } else {
            console.log("Brew Coffee!");
         }
     }
}
