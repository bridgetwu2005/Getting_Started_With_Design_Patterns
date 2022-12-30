package com.designpattern;

/**
 * Factory Pattern - ShapeFactory
 *
 * @author: bridget
 */
public class ShapeFactory {
    public Shape createShape(String shapeType) {
        if ("CIRCLE".equals(shapeType)) {
            return new Circle();

        } else if ("OVAL".equals(shapeType)) {
            return new Oval();

        } else if ("SQUARE".equals(shapeType)) {
            return new Square();
        }
        throw new UnsupportedOperationException("Shape is not supported: " + shapeType);
    }
}
