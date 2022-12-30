package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * Computer is the bridge "abstraction" defines the interface for the "control" part of the two class hierarchies.
 * It maintains a reference to an object of the "implementation" (OperatingSystem) hierarchy
 * and delegates all of the real work to this object (OperatingSystem).
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public abstract class Computer {
    protected List<OperatingSystem> operatingSystems;

    protected Computer(List<OperatingSystem> operatingSystems) {
        this.operatingSystems = new ArrayList<>();
        this.operatingSystems.addAll(operatingSystems);
    }

    /**
     * delegates all of the real work through OS for display OperatingSystem information
     */
    public abstract void displayOSInfo();

    /**
     * delegates all of the real work through OS for start OperatingSystem
     */
    public abstract void start();

    /**
     * delegates all of the real work through OS for shutdown OperatingSystem
     */
    public abstract void shutdown();

    /**
     * delegates all of the real work through OS for restart OperatingSystem
     */
    public abstract void restart();
}
