from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

'''
    Chapter 11: Bridge Design Pattern
    The Bridge Pattern can be thought of as two layers of abstraction.
    This pattern involves an interface which acts as a bridge which makes the functionality of concrete classes
    independent from interface implementer classes.
    Both types of classes can be altered structurally without affecting each other.
    Decouple implementation from interface and hiding implementation details from client is the purpose of bridge design pattern.
    In our Bridge Design Pattern example:
    the OperatingSystem could have many concrete Operating System(Window, MacOS,  Linux), and Computer come to the OperatingSystem to get OS information and operation.
    OperatingSystems are independent and the abstract Computer creates the connection between Computer and Operating System.

'''
class OperatingSystem(ABC):
    '''
     OperatingSystem is the "Implementor" interface declares OperatingSystem methods common to all concrete implementation classes. in our case, it is Windows, MacOS and LinuxOS.
     The interface doesn't have to match the  Computer abstraction's interface. The two interfaces can be entirely different.
     Typically the implementation interface - OperatingSystem  provides only primitive OperatingSystem operations, while the bridge abstraction
     defines higher-level operations OSInfo Computer on those primitives.
    '''
    # display Operating System name.
    def display_os_name(self):
        pass

    # display Operating System Version.
    def display_os_version(self):
        pass

    # display Operating System memory.
    def display_os_memory(self):
        pass

    # start Operating System.
    def start(self):
        pass

    # shutdown Operating System.
    def shutdown(self):
        pass

class WindowsOS(OperatingSystem): 
    """
       WindowsOS implements the bridge "implementation" interface OperatingSystem
    """
    # display Operating System name.
    def display_os_name(self):
        print("window")

    # display Operating System Version.
    def display_os_version(self):
        print("11")

    # display Operating System memory.
    def display_os_memory(self):
        print("64 GB RAM")

    # start Operating System.
    def start(self):
        print("Start Window Operating System")

    # shutdown Operating System.
    def shutdown(self):
        print("Shutdown Window Operating System")

class MacOS(OperatingSystem): 
    """
       MacOS implements the bridge "implementation" interface OperatingSystem
    """
    # display Operating System name.
    def display_os_name(self):
        print("macOS")

    # display Operating System Version.
    def display_os_version(self):
        print("13 (Ventura)")

    # display Operating System memory.
    def display_os_memory(self):
        print("32 GB RAM")

    # start Operating System.
    def start(self):
        print("Start Mac Operating System")

    # shutdown Operating System.
    def shutdown(self):
        print("Shutdown Mac Operating System")

class LinuxOS(OperatingSystem): 
    """
       LinuxOS implements the bridge "implementation" interface OperatingSystem
    """
    # display Operating System name.
    def display_os_name(self):
        print("Ubuntu")

    # display Operating System Version.
    def display_os_version(self):
        print("20.04 LTS")

    # display Operating System memory.
    def display_os_memory(self):
        print("128 GB RAM")

    # start Operating System.
    def start(self):
        print("Start Linux Operating System")

    # shutdown Operating System.
    def shutdown(self):
        print("Shutdown Linux Operating System")

class Computer(ABC):

    '''
     Computer is the bridge "abstraction" defines the interface for the "control" part of the two class hierarchies.
     It maintains a reference to an object of the "implementation" (OperatingSystem) hierarchy
     and delegates all of the real work to this object (OperatingSystem).
    '''
    def __init__(self, operatingSystems) -> None:
        self.operatingSystems =[]
        if type(operatingSystems) == type([]):
            for os in operatingSystems:
                self.operatingSystems.append(os)


    # delegates all of the real work through OS for display OperatingSystem information
    @abstractmethod
    def display_os_info() :
        pass
    # delegates all of the real work through OS for start OperatingSystem
    @abstractmethod
    def start() :
        pass

    # delegates all of the real work through OS for shutdown OperatingSystem
    @abstractmethod
    def shutdown() :
        pass
    
    # delegates all of the real work through OS for restart OperatingSystem
    @abstractmethod
    def restart() :
        pass

class Laptop(Computer):
    """
        Laptop extends Computer (the bridge "abstraction") and delegates all of the real work to OperatingSystem Implementor
    """

    # call OperatingSystem to display Operating System name, version, memory
    def display_os_info(self) :
       print("... Laptop Operating System information ...")
       for os in self.operatingSystems:
           os.display_os_name()
           os.display_os_version()
           os.display_os_memory()          

    # start Laptop Operating System
    def start(self) :
       print("... Laptop Operating System starting ...")
       for os in self.operatingSystems:
          os.start()

    # shutdown Laptop Operating System
    def shutdown(self) :
       print("... Laptop Operating System shutting down ...")
       for os in self.operatingSystems:
          os.shutdown()
    
    # restart Laptop Operating System
    def restart(self) :
       print("... Laptop Operating System restarting ...")
       for os in self.operatingSystems:
          os.shutdown()
          os.start()

class Desktop(Computer):
    """
        Desktop extends Computer (the bridge "abstraction") and delegates all of the real work to OperatingSystem Implementor
    """

    # call OperatingSystem to display Operating System name, version, memory
    def display_os_info(self) :
       print("... Desktop Operating System information ...")
       for os in self.operatingSystems:
           os.display_os_name()
           os.display_os_version()
           os.display_os_memory()          

    # start Laptop Operating System
    def start(self) :
       print("... Desktop Operating System starting ...")
       for os in self.operatingSystems:
          os.start()

    # shutdown Laptop Operating System
    def shutdown(self) :
       print("... Desktop Operating System shutting down ...")
       for os in self.operatingSystems:
          os.shutdown()
    
    # restart Laptop Operating System
    def restart(self) :
       print("... Desktop Operating System restarting ...")
       for os in self.operatingSystems:
          os.shutdown()
          os.start()

def main():
    print()
    print("<==== Run Laptop Mac Operating System ====>")
    print()
    # call WindowsOS
    mac_laptop = Laptop([MacOS()])
    mac_laptop.display_os_info()
    mac_laptop.start()
    mac_laptop.shutdown()
    mac_laptop.restart()
    print()
    print("<==== Run Desktop Window and Linux Operating System ====>")
    print()
    #call Windows and Linux
    window_linux_desktop = Desktop([WindowsOS(),LinuxOS()])
    #call LinuxOS
    linux_desktop = Desktop(LinuxOS())
    window_linux_desktop.display_os_info()
    window_linux_desktop.start()
    window_linux_desktop.shutdown()
    window_linux_desktop.restart()

if __name__ == '__main__':
    main()