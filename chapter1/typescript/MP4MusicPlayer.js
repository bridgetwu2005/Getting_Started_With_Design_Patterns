"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MP4MusicPlayer = void 0;
const MusicPlayerBase_1 = require("./MusicPlayerBase");
/**
 * MP4MusicPlayer as concret class implements play method
 */
class MP4MusicPlayer extends MusicPlayerBase_1.MusicPlayerBase {
    //implement play method 
    play() {
        console.log("Play music");
    }
}
exports.MP4MusicPlayer = MP4MusicPlayer;
