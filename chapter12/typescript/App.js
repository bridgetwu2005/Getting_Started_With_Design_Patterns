"use strict";
/**
 * Chapter 12: Decorator Design Pattern
 * Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
 *
 * @Author Bridget Wu
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ChocolateDecorator_1 = require("./ChocolateDecorator");
const CookieDoughDecorator_1 = require("./CookieDoughDecorator");
const RaspberriesDecorator_1 = require("./RaspberriesDecorator");
const VanillaIcecream_1 = require("./VanillaIcecream");
//create VanillaIcecream instance
let vanillaIcecream = new VanillaIcecream_1.VanillaIcecream();
let result = vanillaIcecream.makeIcecream();
console.log(result);
console.log("preparing Vanilla Icecream using Chocolate");
let chocolateDecorator = new ChocolateDecorator_1.ChocolateDecorator(vanillaIcecream);
result = chocolateDecorator.makeIcecream();
console.log("  ==>" + result);
console.log("preparing Vanilla Icecream using Raspberries and Chocolate");
let raspberriesDecorator = new RaspberriesDecorator_1.RaspberriesDecorator(chocolateDecorator);
result = raspberriesDecorator.makeIcecream();
console.log("  ==>" + result);
console.log("preparing Vanilla Icecream using CookieDough");
let cookieDoughDecorator = new CookieDoughDecorator_1.CookieDoughDecorator(vanillaIcecream);
result = cookieDoughDecorator.makeIcecream();
console.log("  ==>" + result);
