"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsOS = void 0;
/**
 * WindowsOS implements the bridge "implementation" interface OperatingSystem
 *
 * @Author Bridget
 */
class WindowsOS {
    displayOSName() {
        console.log("window");
    }
    displayOSVersion() {
        console.log("11");
    }
    displayMemory() {
        console.log("64 GB RAM");
    }
    start() {
        console.log("Start Window Operating System");
    }
    shutdown() {
        console.log("Shutdown Window Operating System");
    }
}
exports.WindowsOS = WindowsOS;
