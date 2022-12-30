"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlayerBase = void 0;
/**
 * MusicPlayerBase implements download method,
 * but it doesn't implement play method
 * so this class is still abstract class
 */
class MusicPlayerBase {
    constructor() {
        this.musicServerUrl = "https://music.demo.download.com";
        this.clientAuthKey = "AB712812";
    }
    //implement download method.
    download(musicName) {
        this.getMusicServiceConnection();
        console.log("download music: " + musicName + "...");
    }
    getMusicServiceConnection() {
        console.log("connecting music service " + this.musicServerUrl + " with client key: " + this.clientAuthKey);
    }
}
exports.MusicPlayerBase = MusicPlayerBase;
