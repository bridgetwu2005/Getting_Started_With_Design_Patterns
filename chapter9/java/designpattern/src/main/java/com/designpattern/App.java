package com.designpattern;

/**
 * Chapter 9: Facade Design Pattern
 * Client classes don't know the detail of concrete class implementation which provided by the complex service.
 * When if you decide to use different service, you only need to rewrite the facade class.
 *
 * @Author: Bridget
 */
public class App {
    public static void main(String[] args) {

        HomeFacade homeFacade = new HomeFacade();
        System.out.println("At home");
        homeFacade.atHome();
        System.out.println("Leave home");
        homeFacade.leaveHome();
    }
}
