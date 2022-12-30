package com.designpattern;

/**
 * Chapter 12: Decorator Design Pattern
 * Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
 *
 * @Author Bridget Wu
 */
public class App {
    public static void main(String[] args) {
        //create VanillaIcecream instance
        VanillaIcecream vanillaIcecream = new VanillaIcecream();
        String result = vanillaIcecream.makeIcecream();
        System.out.println(result);

        System.out.println("preparing Vanilla Icecream using Chocolate");
        ChocolateDecorator chocolateDecorator = new ChocolateDecorator(vanillaIcecream);
        result = chocolateDecorator.makeIcecream();
        System.out.println("  ==>" + result);

        System.out.println("preparing Vanilla Icecream using Raspberries and Chocolate");
        Icecream raspberriesDecorator = new RaspberriesDecorator(chocolateDecorator);
        result = raspberriesDecorator.makeIcecream();
        System.out.println("  ==>" + result);


        System.out.println("preparing Vanilla Icecream using CookieDough");
        Icecream cookieDoughDecorator = new CookieDoughDecorator(vanillaIcecream);
        result = cookieDoughDecorator.makeIcecream();
        System.out.println("  ==>" + result);

    }
}
