package com.designpattern;

/**
 * LinuxOS implements the bridge "Implementor" interface OperatingSystem
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class LinuxOS implements OperatingSystem {

    @Override
    public void displayOSName() {
        System.out.println("Ubuntu");
    }

    @Override
    public void displayOSVersion() {
        System.out.println("20.04 LTS");
    }

    @Override
    public void displayMemory() {
        System.out.println("128 GB RAM");
    }

    @Override
    public void start() {
        System.out.println("Start Linux Operating System");
    }

    @Override
    public void shutdown() {
        System.out.println("Shutdown Linux Operating System");
    }
}
