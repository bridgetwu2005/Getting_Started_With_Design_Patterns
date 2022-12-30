import { OperatingSystem } from "./OperatingSystem";

/**
 * Computer is the bridge "abstraction" defines the interface for the "control" part of the two class hierarchies.
 * It maintains a reference to an object of the "implementation" (OperatingSystem) hierarchy
 * and delegates all of the real work to this object (OperatingSystem).
 *
 * @Author Bridget
 */
 export abstract class Computer {
    protected operatingSystems: OperatingSystem[] = [];

    protected constructor(operatingSystems: OperatingSystem[]) {
        for(let os of operatingSystems) {
            this.operatingSystems.push(os)
        }
    }

    /**
     * delegates all of the real work through OS for display OperatingSystem information
     */
    public abstract displayOSInfo(): void;

    /**
     * delegates all of the real work through OS for start OperatingSystem
     */
    public abstract start(): void;

    /**
     * delegates all of the real work through OS for shutdown OperatingSystem
     */
    public abstract shutdown(): void;

    /**
     * delegates all of the real work through OS for restart OperatingSystem
     */
    public abstract restart(): void;
}
