from abc import ABC, abstractmethod
 
class Shape(ABC):
    '''
    Abstraction: Shape is abstract class
    '''
    # define abstractmethod draw
    @abstractmethod
    def draw(self):
        pass

class Circle(Shape):
    '''
    implement shape detail and draw circle
    '''
    # draw circle shape
    def draw(self):
        return print("Draw Circle")

class Square(Shape):
    '''
    * implement shape detail  and draw square
    '''
    # draw square shape
    def draw(self):
        return print("Draw Square")


class MusicPlayer(ABC):
    '''
     define MusicPlayer interface with two abstract methods
    '''
    #define abstractmethod play
    @abstractmethod
    def play(self):
        pass

    #define abstractmethod download
    @abstractmethod
    def download(self, music_name: str):
        pass

class MusicPlayerBase(MusicPlayer):
    '''
    MusicPlayerBase implements download method, but it doesn't implement play method. so this class is still abstract class
    '''
    def __init__(self):
         self.__music_server_url = "https://music.demo.download.com"
         self.__client_auth_key = "AB712812"

    # implement download method
    def download(self, music_name: str):
        self.__get_music_service_connection()
        print("download music {}...".format(music_name))

    def __get_music_service_connection(self):
        print("connecting music service {} with client key: {}".format(self.__music_server_url, self.__client_auth_key))


class MP4MusicPlayer(MusicPlayerBase):
    '''
     MP4MusicPlayer as a concrete implements play method defined in MusicPlayer class, it inherit download from MusicPlayerBase class
    '''
    # implement play method
    def play(self):
        print("Play music.")


musicPlayer = MP4MusicPlayer()
musicPlayer.download("All Too Well")
musicPlayer.play()
musicPlayer.__get_music_service_connection()

# Method overriding Runtime polymorphism:
circle_shape = Circle()
square_shape = Square()
circle_shape.draw()
square_shape.draw()