package com.designpattern;

/**
 * WindowsOS implements the bridge "Implementor" interface OperatingSystem
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class WindowsOS implements OperatingSystem {

    @Override
    public void displayOSName() {
        System.out.println("window");
    }

    @Override
    public void displayOSVersion() {
        System.out.println("11");
    }

    @Override
    public void displayMemory() {
        System.out.println("64 GB RAM");
    }

    @Override
    public void start() {
        System.out.println("Start Window Operating System");
    }

    @Override
    public void shutdown() {
        System.out.println("Shutdown Window Operating System");
    }
}
