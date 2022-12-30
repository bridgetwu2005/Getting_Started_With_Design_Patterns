/**
 * USAppliance defines standard 110 volt electrical outlets in US
 *
 * @Author: Bridget
 */

 export abstract class USAppliance {

    public getUSStandardVolt(): number {
        return 110;

    }
    /**
     * check input voltage is follow US Appliance Standard
     *
     * @param volt
     * @return
     */
     public checkVoltageCompatible(volt: number): boolean {
        if (volt != this.getUSStandardVolt()) {
            return false;
        }
        return true;

    }
    /**
     * run European Appliance
     *
     * @param volt
     */
     protected abstract run(volt: number): void;
}
