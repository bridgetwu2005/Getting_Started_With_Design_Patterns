package com.designpattern;

/**
 * MacOS implements the bridge "Implementor" interface OperatingSystem
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class MacOS implements OperatingSystem {

    @Override
    public void displayOSName() {
        System.out.println("macOS");
    }

    @Override
    public void displayOSVersion() {
        System.out.println("13 (Ventura)");
    }

    @Override
    public void displayMemory() {
        System.out.println("32 GB RAM");
    }

    @Override
    public void start() {
        System.out.println("Start Mac Operating System");
    }

    @Override
    public void shutdown() {
        System.out.println("Shutdown Mac Operating System");
    }
}