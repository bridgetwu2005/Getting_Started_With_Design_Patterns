package com.designpattern;

/**
 * ImageServer is Subject.
 * The interface defines the functionality available to be used by the clients.
 *
 * @Author Bridget Wu
 */
public interface ImageServer {

    /**
     * getImage Downloads image file and display it on screen.
     * The method will  be implemented by concrete class which implement this interface.
     *
     * @param imageName
     */
    void getImage(String imageName);

    /**
     * uploadImage update image file to file server.
     * The method will  be implemented by concrete class which implement this interface.
     *
     * @param imageName
     */
    void uploadImage(String imageName);
}
