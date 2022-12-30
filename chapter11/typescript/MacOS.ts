import { OperatingSystem } from "./OperatingSystem";

/**
 * MacOS implements the bridge "implementation" interface OS
 *
 * @Author Bridget
 */
 export class MacOS implements OperatingSystem {

    public displayOSName(): void {
        console.log("macOS");
    }

    public displayOSVersion(): void {
        console.log("13 (Ventura)");
    }

    public displayMemory(): void {
        console.log("32 GB RAM");
    }

    public start(): void {
        console.log("Start Mac Operating System");
    }

    public shutdown(): void {
        console.log("Shutdown Mac Operating System");
    }
}