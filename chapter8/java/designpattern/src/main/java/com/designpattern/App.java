package com.designpattern;

/**
 * Chapter 8: Proxy Design Pattern
 * A proxy object represents a placeholder or surrogate which provides an interface to outer world to access the functionality of original object.
 * A proxy object is refer to an object representing another object.
 *
 * @Author Bridget Wu
 */
public class App {
    public static void main(String[] args) {
        //create ImageManagerProxy instance
        ImageManagerProxy imageManagerProxy = new ImageManagerProxy();
        // use ImageManagerProxy to invoke ImageManager instead of calling ImageManager directly to upload image
        imageManagerProxy.uploadImage("proxy_pattern_pic.png");
        System.out.println();
        // use ImageManagerProxy to invoke ImageManager instead of calling ImageManager directly to get image
        imageManagerProxy.getImage("proxy_pattern_pic.png");
    }
}
