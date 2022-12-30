"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Desktop_1 = require("./Desktop");
const Laptop_1 = require("./Laptop");
const LinuxOS_1 = require("./LinuxOS");
const MacOS_1 = require("./MacOS");
const WindowsOS_1 = require("./WindowsOS");
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
console.log();
console.log("<==== Run Laptop Mac Operating System ====>");
console.log();
//call WindowsOS
let macLaptop = new Laptop_1.Laptop([new MacOS_1.MacOS()]);
macLaptop.displayOSInfo();
macLaptop.start();
macLaptop.shutdown();
macLaptop.restart();
console.log();
console.log("<==== Run Desktop Window and Linux Operating System ====>");
console.log();
//call WindowsOS, LinuxOS
let windowLinuxDesktop = new Desktop_1.Desktop([new WindowsOS_1.WindowsOS(), new LinuxOS_1.LinuxOS()]);
windowLinuxDesktop.displayOSInfo();
windowLinuxDesktop.start();
windowLinuxDesktop.shutdown();
windowLinuxDesktop.restart();
