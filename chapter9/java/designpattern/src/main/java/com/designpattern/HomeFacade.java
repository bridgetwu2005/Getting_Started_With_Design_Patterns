package com.designpattern;

/**
 * HomeFacade hide the service's complexity behind a simple facade interface.
 * It's a trade-off between functionality and simplicity.
 *
 * @Author: Bridget
 */

public class HomeFacade {
    private Light light;

    private Music music;

    private AirConditioner airConditioner;

    /**
     * instantiate all required service when create HomeFacade instance
     */
    public HomeFacade() {
        light = new Light();
        music = new Music();
        airConditioner = new AirConditioner();

    }

    /**
     * aggregate all needed service call for atHome function
     */
    public void atHome() {
        light.on();
        music.on();
        airConditioner.on();
    }

    /**
     * aggregate all needed service call for leaveHome function
     */
    public void leaveHome() {
        light.off();
        music.off();
        airConditioner.off();
    }
}
