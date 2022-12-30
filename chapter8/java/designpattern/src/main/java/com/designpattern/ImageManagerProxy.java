package com.designpattern;

/**
 * ImageManagerProxy is Proxy which implements the same interface Subject (ImageServer)
 * The proxy hides real object (ImageManager) by extending it and clients communicate to real object via this proxy object.
 * Usually pattern create this proxy object when client request for real object.
 *
 * @Author Bridget Wu
 */
public class ImageManagerProxy implements ImageServer {
    private ImageManager imageManager;

    public ImageManagerProxy() {
        this.imageManager = new ImageManager();
    }

    /**
     * getImage Downloads image file and display it on screen.
     *
     * @param imageName
     */
    @Override
    public void getImage(String imageName) {
        System.out.println("ImageManagerProxy: call ImageManager to getImage " + imageName);
        imageManager.getImage(imageName);
    }

    @Override
    public void uploadImage(String imageName) {
        System.out.println("ImageManagerProxy: compressing image file " + imageName);
        System.out.println("ImageManagerProxy: call ImageManager to uploadImage");
        imageManager.uploadImage(imageName);
        System.out.println("ImageManagerProxy: move image file" + imageName + " to archive folder");
    }
}