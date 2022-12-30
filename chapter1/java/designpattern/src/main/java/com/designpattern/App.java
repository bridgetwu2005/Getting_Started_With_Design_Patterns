package com.designpattern;

import com.designpattern.abstraction.Calculator;
import com.designpattern.abstraction.Circle;
import com.designpattern.abstraction.Shape;
import com.designpattern.abstraction.Square;

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        //Method overriding Runtime polymorphism example:
        System.out.println(Calculator.add(10, 5));
        System.out.println(Calculator.add(1.5, 2.3));

        //Method overriding Runtime polymorphism example:
        Shape circleShape = new Circle();
        Shape squareShape = new Square();
        circleShape.draw();
        squareShape.draw();

    }
}
