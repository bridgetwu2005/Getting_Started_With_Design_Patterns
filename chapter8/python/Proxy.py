from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

"""
   Chapter 8: Proxy Design Pattern
   A proxy object represents a placeholder or surrogate which provides an interface to outer world to access the functionality of original object.
   A proxy object is refer to an object representing another object.

"""
class ImageServer(ABC):
    """
     ImageServer is Subject. The interface defines the functionality available to be used by the clients.

    """

    @abstractmethod
    def get_image(self, imageName: str):
        """
         getImage Downloads image file and display it on screen.
         The method will  be implemented by concrete class which implement this interface.
        """
        pass

    @abstractmethod
    def upload_image(self, imageName: str):
         """
        uploadImage update image file to file server.
        The method will  be implemented by concrete class which implement this interface.
        """
         pass

class ImageManager(ImageServer):
    """
    ImageManager is Real Subject which implemented Subject
    and it is concrete implementation which needs to be hidden behind a proxy.
    """
    # Actual implementation: getImage Downloads image file and display it on screen.
    def get_image(self, imageName: str):
        print('ImageManager: Downloading image file {}'.format(imageName))
        print('ImageManager: Displaying image {}'.format(imageName))

    # Actual implementation: uploadImage update image file to file server.
    def upload_image(self, imageName: str):
        print('ImageManager: Uploading image file {}'.format(imageName))

class ImageManagerProxy(ImageServer):

    """
        ImageManagerProxy is Proxy which implements the same interface Subject (ImageServer)
        The proxy hides real object (ImageManager) by extending it and clients communicate to real object via this proxy object.
        Usually pattern create this proxy object when client request for real object.
    """
    # initialized ImageManager Proxy, , we set up ImageManager
    def __init__(self):
        self.imageManager = ImageManager()

    # getImage Downloads image file via Real Subject ImageManager and display it on screen via
    def get_image(self, imageName: str):
        print('ImageManagerProxy: call ImageManager to getImage {}'.format(imageName))
        self.imageManager.get_image(imageName)

    # Actual implementation: uploadImage update image file to file server.
    def upload_image(self, imageName: str):
        print('ImageManagerProxy: compressing image file  {} '.format(imageName))
        print("ImageManagerProxy: call ImageManager to uploadImage")
        self.imageManager.upload_image(imageName)
        print('ImageManagerProxy: move image file {} to archive folder'.format(imageName))

def main():
    # create ImageManagerProxy instance
    imageManager_proxy = ImageManagerProxy()
    # use ImageManagerProxy to invoke ImageManager instead of calling ImageManager directly to upload image
    imageManager_proxy.upload_image("proxy_pattern_pic.png")

    print()
    # use ImageManagerProxy to invoke ImageManager instead of calling ImageManager directly to get image
    imageManager_proxy.get_image("proxy_pattern_pic.png")


if __name__ == '__main__':
    main()