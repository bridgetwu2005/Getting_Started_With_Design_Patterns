import { ImageManager } from "./ImageManager";
import { ImageServer } from "./ImageServer";

/**
 * ImageManagerProxy is Proxy which implements the same interface Subject (ImageServer)
 * The proxy hides real object (ImageManager) by extending it and clients communicate to real object via this proxy object.
 * Usually pattern create this proxy object when client request for real object.
 *
 * @Author Bridget Wu
 */
 export class ImageManagerProxy implements ImageServer {
    private imageManager: ImageManager;

    constructor() {
        this.imageManager = new ImageManager();
    }
    /**
     * getImage Downloads image file and display it on screen.
     *
     * @param imageName
     */
    public getImage(imageName: String): void {
        console.log("ImageManagerProxy: call ImageManager to getImage " + imageName);
        this.imageManager.getImage(imageName);
    }

    public  uploadImage(imageName: String): void {
        console.log("ImageManagerProxy: compressing image file " + imageName);
        console.log("ImageManagerProxy: call ImageManager to uploadImage");
        this.imageManager.uploadImage(imageName);
        console.log("ImageManagerProxy: move image file" + imageName + " to archive folder");
    }
}