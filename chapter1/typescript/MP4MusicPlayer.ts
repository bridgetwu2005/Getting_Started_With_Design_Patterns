import { MusicPlayerBase } from "./MusicPlayerBase";

/**
 * MP4MusicPlayer as concret class implements play method
 */
 export class MP4MusicPlayer extends MusicPlayerBase {

    //implement play method 
    public  play(): void {
        console.log("Play music");
    }
}
