import { ImageServer } from "./ImageServer";

/**
 * ImageManager is Real Subject which implemented Subject
 * and it is concrete implementation which needs to be hidden behind a proxy.
 *
 * @Author Bridget Wu
 */
 export class ImageManager implements ImageServer {

    /**
     * Actual implementation: getImage Downloads image file and display it on screen.
     *
     * @param imageName
     */
    public getImage(imageName: String): void {
        console.log("ImageManager: Downloading image file" + imageName);
        console.log("ImageManager: Displaying Image" + imageName);
    }

    /**
     * Actual implementation: uploadImage update image file to file server.
     *
     * @param imageName
     */
    public uploadImage(imageName: String): void {
        console.log("ImageManager: Uploading image file" + imageName);
    }
}
