import { OperatingSystem } from "./OperatingSystem";

/**
 * LinuxOS implements the bridge "implementation" interface OS
 *
 * @Author Bridget
 */
 export class LinuxOS implements OperatingSystem {

    public displayOSName(): void {
        console.log("Ubuntu");
    }

    public displayOSVersion(): void {
        console.log("20.04 LTS");
    }

    public displayMemory(): void {
        console.log("128 GB RAM");
    }

    public start(): void {
        console.log("Start Linux Operating System");
    }

    public shutdown(): void {
        console.log("Shutdown Linux Operating System");
    }
}
