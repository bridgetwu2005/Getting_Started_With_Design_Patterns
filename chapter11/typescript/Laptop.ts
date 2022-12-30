import { Computer } from "./Computer";
import { OperatingSystem } from "./OperatingSystem";

/**
 * Laptop extends Computer (the bridge "abstraction") and delegates all of the real work to OperatingSystem Implementor
 *
 * @Author: Bridget
 */
 export class Laptop extends Computer {

    /**
     * call super to inheritance os instance
     *
     * @param os
     */
     public constructor(operatingSystems: OperatingSystem[]) {
        super(operatingSystems);
    }

    /**
     * call OperatingSystem to display Laptop Operating System name, version, memory
     */
    public displayOSInfo(): void {
        console.log("... Laptop Operating System information ...");
        for(let os of this.operatingSystems) {
            os.displayOSName();
            os.displayOSVersion();
            os.displayMemory();
        }
    }

    /**
     * start Laptop Operating System
     */
    public start(): void {
        console.log("... Laptop Operating System starting ...");
        for(let os of this.operatingSystems) {
            os.start();
        }
    }
    /**
     * shutdown Laptop Operating System
     */
    public shutdown(): void {
        console.log("... Laptop Operating System shutting down ...");
        for(let os of this.operatingSystems) {
            os.shutdown();
        }
    }
    /**
     * restart Laptop Operating System
     */
    public restart(): void {
        console.log("... Laptop Operating System restarting ...");
        for(let os of this.operatingSystems) {
            os.shutdown();
            os.start();
        }
    }
}
