
/**
 * OperatingSystem is the "Implementor" interface declares OperatingSystem methods common to all concrete implementation classes.
 * in our case, it is Windows, MacOS and LinuxOS.
 * The interface doesn't have to match the  Computer abstraction's interface. The two interfaces can be entirely different.
 * Typically the implementation interface - OperatingSystem  provides only primitive OperatingSystem operations, while the bridge abstraction
 * defines higher-level operations OSInfo Computer on those primitives.
 *
 * @Author Bridget Wu
 */
 export interface OperatingSystem {

    displayOSName(): void;

    displayOSVersion(): void;

    displayMemory(): void;

    start(): void;

    shutdown(): void;
}
