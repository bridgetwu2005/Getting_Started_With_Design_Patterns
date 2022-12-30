/**
 * EuropeanAppliance defines standard 220 volt electrical outlets in European
 *
 * @Author: Bridget
 */

 export abstract class EuropeanAppliance {

    public getEUStandardVolt(): number {
        return 220;

    }
    /**
     * check input voltage is follow European Appliance Standard
     *
     * @param volt
     * @return
     */
     public checkVoltageCompatible(volt: number): boolean {
        if (volt != this.getEUStandardVolt()) {
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
