"use strict";
/**
 * HomeFacade hide the service's complexity behind a simple facade interface.
 * It's a trade-off between functionality and simplicity.
 *
 * @Author: Bridget
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFacade = void 0;
const AirConditioner_1 = require("./AirConditioner");
const Light_1 = require("./Light");
const Music_1 = require("./Music");
class HomeFacade {
    /**
     * instantiate all required service when create HomeFacade instance
     */
    constructor() {
        this.light = new Light_1.Light();
        this.music = new Music_1.Music();
        this.airConditioner = new AirConditioner_1.AirConditioner();
    }
    /**
     * aggregate all needed service call for atHome function
     */
    atHome() {
        this.light.on();
        this.music.on();
        this.airConditioner.on();
    }
    /**
     * aggregate all needed service call for leaveHome function
     */
    leaveHome() {
        this.light.off();
        this.music.off();
        this.airConditioner.off();
    }
}
exports.HomeFacade = HomeFacade;
