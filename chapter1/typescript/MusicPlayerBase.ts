import { MusicPlayer } from "./MusicPlayer";

/**
 * MusicPlayerBase implements download method,
 * but it doesn't implement play method
 * so this class is still abstract class
 */
 export abstract class MusicPlayerBase implements MusicPlayer {

    private musicServerUrl: String = "https://music.demo.download.com";

    private clientAuthKey: String = "AB712812";

    
    // re-write all of the unimplemented methods and add abstract keyword in function
    abstract play(): void;

    //implement download method.
    public download(musicName: String): void {
        this.getMusicServiceConnection();
        console.log("download music: " + musicName + "...");
    }

    private  getMusicServiceConnection(): void{
        console.log("connecting music service " + this.musicServerUrl + " with client key: " + this.clientAuthKey);
    }
}
