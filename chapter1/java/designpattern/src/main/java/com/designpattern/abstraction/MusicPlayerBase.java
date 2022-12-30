package com.designpattern.abstraction;

/**
 * MusicPlayerBase implements download method,
 * but it doesn't implement play method
 * so this class is still abstract class
 */
public abstract class MusicPlayerBase implements MusicPlayer {
    private String musicServerUrl = "https://music.demo.download.com";

    private String clientAuthKey = "AB712812";

    /**
     * download music
     *
     * @param musicName
     */
    public void download(String musicName) {
        getMusicServiceConnection();
        System.out.println("download music: " + musicName + "...");
    }

    private void getMusicServiceConnection() {
        System.out.println("connecting music service " + musicServerUrl + " with client key: " + clientAuthKey);
    }
}
