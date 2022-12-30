"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageManagerProxy = void 0;
const ImageManager_1 = require("./ImageManager");
/**
 * ImageManagerProxy is Proxy which implements the same interface Subject (ImageServer)
 * The proxy hides real object (ImageManager) by extending it and clients communicate to real object via this proxy object.
 * Usually pattern create this proxy object when client request for real object.
 *
 * @Author Bridget Wu
 */
class ImageManagerProxy {
    constructor() {
        this.imageManager = new ImageManager_1.ImageManager();
    }
    /**
     * getImage Downloads image file and display it on screen.
     *
     * @param imageName
     */
    getImage(imageName) {
        console.log("ImageManagerProxy: call ImageManager to getImage " + imageName);
        this.imageManager.getImage(imageName);
    }
    uploadImage(imageName) {
        console.log("ImageManagerProxy: compressing image file " + imageName);
        console.log("ImageManagerProxy: call ImageManager to uploadImage");
        this.imageManager.uploadImage(imageName);
        console.log("ImageManagerProxy: move image file" + imageName + " to archive folder");
    }
}
exports.ImageManagerProxy = ImageManagerProxy;
