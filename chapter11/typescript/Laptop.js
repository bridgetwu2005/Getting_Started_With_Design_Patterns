"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
const Computer_1 = require("./Computer");
/**
 * Laptop extends Computer (the bridge "abstraction") and delegates all of the real work to OperatingSystem Implementor
 *
 * @Author: Bridget
 */
class Laptop extends Computer_1.Computer {
    /**
     * call super to inheritance os instance
     *
     * @param os
     */
    constructor(operatingSystems) {
        super(operatingSystems);
    }
    /**
     * call OperatingSystem to display Laptop Operating System name, version, memory
     */
    displayOSInfo() {
        console.log("... Laptop Operating System information ...");
        for (let os of this.operatingSystems) {
            os.displayOSName();
            os.displayOSVersion();
            os.displayMemory();
        }
    }
    /**
     * start Laptop Operating System
     */
    start() {
        console.log("... Laptop Operating System starting ...");
        for (let os of this.operatingSystems) {
            os.start();
        }
    }
    /**
     * shutdown Laptop Operating System
     */
    shutdown() {
        console.log("... Laptop Operating System shutting down ...");
        for (let os of this.operatingSystems) {
            os.shutdown();
        }
    }
    /**
     * restart Laptop Operating System
     */
    restart() {
        console.log("... Laptop Operating System restarting ...");
        for (let os of this.operatingSystems) {
            os.shutdown();
            os.start();
        }
    }
}
exports.Laptop = Laptop;
