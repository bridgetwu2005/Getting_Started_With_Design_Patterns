
/**
 * Chapter 12: Decorator Design Pattern
 * Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
 *
 * @Author Bridget Wu
 */

import { ChocolateDecorator } from "./ChocolateDecorator";
import { CookieDoughDecorator } from "./CookieDoughDecorator";
import { RaspberriesDecorator } from "./RaspberriesDecorator";
import { VanillaIcecream } from "./VanillaIcecream";

//create VanillaIcecream instance
let vanillaIcecream = new VanillaIcecream();
let result = vanillaIcecream.makeIcecream();
console.log(result);

console.log("preparing Vanilla Icecream using Chocolate");
let  chocolateDecorator = new ChocolateDecorator(vanillaIcecream);
result = chocolateDecorator.makeIcecream();
console.log("  ==>" + result);

console.log("preparing Vanilla Icecream using Raspberries and Chocolate");
let raspberriesDecorator = new RaspberriesDecorator(chocolateDecorator);
result = raspberriesDecorator.makeIcecream();
console.log("  ==>" + result);


console.log("preparing Vanilla Icecream using CookieDough");
let cookieDoughDecorator = new CookieDoughDecorator(vanillaIcecream);
result = cookieDoughDecorator.makeIcecream();
console.log("  ==>" + result);