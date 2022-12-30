package com.designpattern;

import java.util.Arrays;

/**
 * Chapter 11: Bridge Design Pattern
 * The Bridge Pattern can be thought of as two layers of abstraction.
 * This pattern involves an interface which acts as a bridge which makes the functionality of concrete classes
 * independent from interface implementer classes.
 * Both types of classes can be altered structurally without affecting each other.
 * Decouple implementation from interface and hiding implementation details from client is the purpose of bridge design pattern.
 * In our Bridge Design Pattern example:
 * the OperatingSystem could have many concrete Operating System(Window, MacOS,  Linux),
 * and Computer come to the OperatingSystem to get OS information and operation.
 * OperatingSystems are independent and the abstract Computer creates the connection between Computer and Operating System.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class App {
    public static void main(String[] args) {
        System.out.println();
        System.out.println("<==== Run Laptop Mac Operating System ====>");
        System.out.println();
        //Setup  macOS in Laptop
        Computer macLaptop = new Laptop(Arrays.asList(new MacOS()));
        //call  Laptop macOS function
        macLaptop.displayOSInfo();
        macLaptop.start();
        macLaptop.shutdown();
        macLaptop.restart();
        System.out.println();

        System.out.println("<==== Run Desktop Window and Linux Operating System ====>");
        System.out.println();
        //Setup WindowsOS and LinuxOS in Desktop
        Computer windowAndLinuxDesktop = new Desktop(Arrays.asList(new WindowsOS(), new LinuxOS()));
        //call  Desktop Windows and Linux  function
        windowAndLinuxDesktop.displayOSInfo();
        windowAndLinuxDesktop.start();
        windowAndLinuxDesktop.shutdown();
        windowAndLinuxDesktop.restart();
        System.out.println();
    }
}
