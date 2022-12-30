"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacOS = void 0;
/**
 * MacOS implements the bridge "implementation" interface OS
 *
 * @Author Bridget
 */
class MacOS {
    displayOSName() {
        console.log("macOS");
    }
    displayOSVersion() {
        console.log("13 (Ventura)");
    }
    displayMemory() {
        console.log("32 GB RAM");
    }
    start() {
        console.log("Start Mac Operating System");
    }
    shutdown() {
        console.log("Shutdown Mac Operating System");
    }
}
exports.MacOS = MacOS;
