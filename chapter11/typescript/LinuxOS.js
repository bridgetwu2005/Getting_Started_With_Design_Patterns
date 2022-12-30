"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinuxOS = void 0;
/**
 * LinuxOS implements the bridge "implementation" interface OS
 *
 * @Author Bridget
 */
class LinuxOS {
    displayOSName() {
        console.log("Ubuntu");
    }
    displayOSVersion() {
        console.log("20.04 LTS");
    }
    displayMemory() {
        console.log("128 GB RAM");
    }
    start() {
        console.log("Start Linux Operating System");
    }
    shutdown() {
        console.log("Shutdown Linux Operating System");
    }
}
exports.LinuxOS = LinuxOS;
