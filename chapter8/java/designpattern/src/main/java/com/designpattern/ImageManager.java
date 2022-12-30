package com.designpattern;

/**
 * ImageManager is Real Subject which implemented Subject
 * and it is concrete implementation which needs to be hidden behind a proxy.
 *
 * @Author Bridget Wu
 */
public class ImageManager implements ImageServer {

    /**
     * Actual implementation: getImage Downloads image file and display it on screen.
     *
     * @param imageName
     */
    @Override
    public void getImage(String imageName) {
        System.out.println("ImageManager: Downloading image file" + imageName);
        System.out.println("ImageManager: Displaying Image" + imageName);
    }

    /**
     * Actual implementation: uploadImage update image file to file server.
     *
     * @param imageName
     */
    @Override
    public void uploadImage(String imageName) {
        System.out.println("ImageManager: Uploading image file" + imageName);
    }
}
