/**
 * ImageServer is Subject.
 * The interface defines the functionality available to be used by the clients.
 *
 * @Author Bridget Wu
 */
 export interface ImageServer {

    /**
     * getImage Downloads image file and display it on screen.
     * The method will  be implemented by concrete class which implement this interface.
     *
     * @param imageName
     */
    getImage(imageName: String): void;

    /**
     * uploadImage update image file to file server.
     * The method will  be implemented by concrete class which implement this interface.
     *
     * @param imageName
     */
    uploadImage(imageName: String): void;
}
