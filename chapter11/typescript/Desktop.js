"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desktop = void 0;
const Computer_1 = require("./Computer");
/**
 * Desktop extends Computer (the bridge "abstraction") and delegates all of the real work to OperatingSystem Implementor
 *
 * @Author: Bridget
 */
class Desktop extends Computer_1.Computer {
    /**
     * call super to inheritance os instance
     *
     * @param operatingSystems
     */
    constructor(operatingSystems) {
        super(operatingSystems);
    }
    /**
     * call OperatingSystem to display Operating System name, version, memory
     */
    displayOSInfo() {
        console.log("... Desktop Operating System information ...");
        for (let os of this.operatingSystems) {
            os.displayOSName();
            os.displayOSVersion();
            os.displayMemory();
        }
    }
    /**
     * start Desktop Operating System
     */
    start() {
        console.log("... Desktop Operating System starting ...");
        for (let os of this.operatingSystems) {
            os.start();
        }
    }
    /**
     * shutdown Desktop Operating System
     */
    shutdown() {
        console.log("... Desktop Operating System shutting down ...");
        for (let os of this.operatingSystems) {
            os.shutdown();
        }
    }
    /**
     * restart Desktop Operating System
     */
    restart() {
        console.log("... Desktop Operating System restarting ...");
        for (let os of this.operatingSystems) {
            os.shutdown();
            os.start();
        }
    }
}
exports.Desktop = Desktop;
