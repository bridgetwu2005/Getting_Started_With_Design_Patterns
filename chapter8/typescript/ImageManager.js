"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageManager = void 0;
/**
 * ImageManager is Real Subject which implemented Subject
 * and it is concrete implementation which needs to be hidden behind a proxy.
 *
 * @Author Bridget Wu
 */
class ImageManager {
    /**
     * Actual implementation: getImage Downloads image file and display it on screen.
     *
     * @param imageName
     */
    getImage(imageName) {
        console.log("ImageManager: Downloading image file" + imageName);
        console.log("ImageManager: Displaying Image" + imageName);
    }
    /**
     * Actual implementation: uploadImage update image file to file server.
     *
     * @param imageName
     */
    uploadImage(imageName) {
        console.log("ImageManager: Uploading image file" + imageName);
    }
}
exports.ImageManager = ImageManager;
