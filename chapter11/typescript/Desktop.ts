import { Computer } from "./Computer";
import { OperatingSystem } from "./OperatingSystem";

/**
 * Desktop extends Computer (the bridge "abstraction") and delegates all of the real work to OperatingSystem Implementor
 *
 * @Author: Bridget
 */
 export class Desktop extends Computer {

    /**
     * call super to inheritance os instance
     *
     * @param operatingSystems
     */
    public constructor(operatingSystems: OperatingSystem[]) {
        super(operatingSystems);
    }

    /**
     * call OperatingSystem to display Operating System name, version, memory
     */
    public displayOSInfo(): void {
        console.log("... Desktop Operating System information ...");
        for(let os of this.operatingSystems) {
            os.displayOSName();
            os.displayOSVersion();
            os.displayMemory();
        }

    }

    /**
     * start Desktop Operating System
     */
    public start(): void {
        console.log("... Desktop Operating System starting ...");
        for(let os of this.operatingSystems) {
            os.start();
        }
    }
    /**
     * shutdown Desktop Operating System
     */
    public shutdown(): void {
        console.log("... Desktop Operating System shutting down ...");
        for(let os of this.operatingSystems) {
            os.shutdown();
        }
    }
    /**
     * restart Desktop Operating System
     */
    public restart(): void {
        console.log("... Desktop Operating System restarting ...");
        for(let os of this.operatingSystems) {
            os.shutdown();
            os.start();
        }
    }
}
