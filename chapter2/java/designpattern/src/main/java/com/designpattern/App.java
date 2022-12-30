package com.designpattern;

/**
 * Chapter 2: Factory Design Pattern
 * The factory pattern defines a method in the factory class to create objects in a common superclass or interface but allows subclasses to change the actual type of objects created at run-time. 
 * 
 * @author: Bridget
 */
public class App {
    public static void main(String[] args) {
        ShapeFactory shapeFactory = new ShapeFactory();

        //create an circle object and call its draw method.
        Shape circle = shapeFactory.createShape("CIRCLE");
        //call draw method of Circle
        circle.draw();

        //create an oval object and call its draw method.
        Shape oval = shapeFactory.createShape("OVAL");

        //call draw method of oval
        oval.draw();

        //create an Square object and call its draw method.
        Shape square = shapeFactory.createShape("SQUARE");
        //call draw method of square
        square.draw();
    }
}
