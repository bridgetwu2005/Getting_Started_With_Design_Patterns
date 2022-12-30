import { OperatingSystem } from "./OperatingSystem";

/**
 * WindowsOS implements the bridge "implementation" interface OperatingSystem
 *
 * @Author Bridget
 */
 export class WindowsOS implements OperatingSystem {

    public displayOSName(): void {
        console.log("window");
    }

    public displayOSVersion(): void {
        console.log("11");
    }

    public displayMemory(): void {
        console.log("64 GB RAM");
    }

    public start(): void {
        console.log("Start Window Operating System");
    }

    public shutdown(): void {
        console.log("Shutdown Window Operating System");
    }
}
