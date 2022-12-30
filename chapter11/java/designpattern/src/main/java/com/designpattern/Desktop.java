package com.designpattern;

import java.util.List;

/**
 * Desktop extends Computer (the bridge "abstraction") and delegates all of the real work to OperatingSystem Implementor
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class Desktop extends Computer {

    /**
     * call super to inheritance os instance
     *
     * @param operatingSystems
     */
    public Desktop(List<OperatingSystem> operatingSystems) {
        super(operatingSystems);
    }

    /**
     * call OperatingSystem to display Operating System name, version, memory
     */
    @Override
    public void displayOSInfo() {
        System.out.println("... Desktop Operating System information ...");
        for (OperatingSystem os : operatingSystems) {
            os.displayOSName();
            os.displayOSVersion();
            os.displayMemory();
        }

    }

    /**
     * start Desktop Operating System
     */
    @Override
    public void start() {
        System.out.println("... Desktop Operating System starting ...");
        for (OperatingSystem os : operatingSystems) {
            os.start();
        }

    }

    /**
     * shutdown Desktop Operating System
     */
    @Override
    public void shutdown() {
        System.out.println("... Desktop Operating System shutting down ...");
        for (OperatingSystem os : operatingSystems) {
            os.shutdown();
        }
    }

    /**
     * restart Desktop Operating System
     */
    @Override
    public void restart() {
        System.out.println("... Desktop Operating System restarting ...");
        for (OperatingSystem os : operatingSystems) {
            os.shutdown();
            os.start();
        }

    }
}
