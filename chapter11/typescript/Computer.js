"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
/**
 * Computer is the bridge "abstraction" defines the interface for the "control" part of the two class hierarchies.
 * It maintains a reference to an object of the "implementation" (OperatingSystem) hierarchy
 * and delegates all of the real work to this object (OperatingSystem).
 *
 * @Author Bridget
 */
class Computer {
    constructor(operatingSystems) {
        this.operatingSystems = [];
        for (let os of operatingSystems) {
            this.operatingSystems.push(os);
        }
    }
}
exports.Computer = Computer;
