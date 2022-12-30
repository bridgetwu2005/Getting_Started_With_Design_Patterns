
/**
 * HomeFacade hide the service's complexity behind a simple facade interface.
 * It's a trade-off between functionality and simplicity.
 *
 * @Author: Bridget
 */

import { AirConditioner } from "./AirConditioner";
import { Light } from "./Light";
import { Music } from "./Music";

 export class HomeFacade {
    private light!: Light;

    private music!: Music;

    private airConditioner!: AirConditioner;

    /**
     * instantiate all required service when create HomeFacade instance
     */
     constructor () {
        this.light = new Light();
        this.music = new Music();
        this.airConditioner = new AirConditioner();

    }


    /**
     * aggregate all needed service call for atHome function
     */
    public atHome(): void {
        this.light.on();
        this.music.on();
        this.airConditioner.on();
    }

    /**
     * aggregate all needed service call for leaveHome function
     */
    public leaveHome(): void {
        this.light.off();
        this.music.off();
        this.airConditioner.off();
    }
}
