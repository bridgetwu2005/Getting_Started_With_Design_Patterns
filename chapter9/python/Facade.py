__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

'''
  Music class
'''
class Music:
    """turn on the Music"""
    def on(self):
         print("Turn on the Music") 

    """turn off the Music"""
    def off(self):
         print("Turn off the Music") 
'''
  Light class
'''
class Light:
    """turn on the light"""
    def on(self):
         print("Turn on the light") 

    """turn off the light"""
    def off(self):
         print("Turn off the light") 

'''
  AirConditioner class
'''
class AirConditioner:
    """turn on the AirConditioner"""
    def on(self):
         print("Turn on the AirConditioner") 

    """turn off the ligAirConditionerht"""
    def off(self):
         print("Turn off the AirConditioner") 

'''
   HomeFacade hide the service's complexity behind a simple facade interface.
   It's a trade-off between functionality and simplicity.
'''
class HomeFacade:
    # instantiate all required service when create HomeFacade instance
    def __init__(self):
        self.light = Light()
        self.music = Music()
        self.airConditioner = AirConditioner()

    # aggregate all needed service call for leaveHome function
    def at_home(self): 
        self.light.on()
        self.music.on()
        self.airConditioner.on()

    # aggregate all needed service call for leaveHome function
    def leave_home(self): 
        self.light.off()
        self.music.off()
        self.airConditioner.off()

# File: Facade.py
def main():
    # create an circle object and call its draw method.
    homeFacade = HomeFacade()
    print("At home") 
    #call at_home method of homeFacade
    homeFacade.at_home()
    print("Leave home") 
    # create an oval object and call its draw method.
    homeFacade.leave_home()


if __name__ == '__main__':
    main()
