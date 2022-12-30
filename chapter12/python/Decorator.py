from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

"""

Chapter 12: Decorator Design Pattern
Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

"""

class Icecream(ABC):
    """
    Icecream as Component Interface - The interface or abstract class defining the methods that will be implemented.

    """
    # all Icecream implementation will implement make_icecream
    @abstractmethod
    def make_icecream() -> str:
        pass

class VanillaIcecream(Icecream):
    """
    Base Component Implementation. We will add different type of Icecreams based on Vanilla Icecream.

    """
    # make Vanilla Icecream
    def make_icecream(self) -> str:
        return "Make Vanilla Icecream"


class IcecreamDecorator(Icecream):
    """

    Decorator class implements the component interface - Icecream and it has a HAS-A relationship with the component interface.
    The component variable should be accessible to the child decorator classes, so we will make this variable protected.

    """
    # assing Icecream in constructor and can make custom Icecream
    def __init__(self, customIcecream: Icecream):
        self.customIcecream = customIcecream

    # make make Icecream
    def make_icecream(self) -> str:
        return self.customIcecream.make_icecream()

class RaspberriesDecorator(IcecreamDecorator):
    """

    RaspberriesDecorator is Concrete Decorators.
    RaspberriesDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.

    """
    # assing Icecream in constructor and can make custom Icecream
    def __init__(self, customIcecream: Icecream):
        self.customIcecream = customIcecream

    # make make Icecream
    def make_icecream(self) -> str:
        return self.customIcecream.make_icecream() + self.add_raspberries()

    # add raspberries
    def add_raspberries(self) -> str:
        return " -> add Freeze-Dried raspberries"
    
class ChocolateDecorator(IcecreamDecorator):
    """

    ChocolateDecorator is Concrete Decorators.
    ChocolateDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.

    """
    # extends parent base decorator  - IcecreamDecorator
    def __init__(self, customIcecream: Icecream):
        self.customIcecream = customIcecream

    # modifying the makeIcecream component behavior accordingly by add_chocolate
    def make_icecream(self) -> str:
        return self.customIcecream.make_icecream() + self.add_chocolate()

    # add chocolate
    def add_chocolate(self) -> str:
        return " -> add chocolate"

class CookieDoughDecorator(IcecreamDecorator):
    """

    CookieDoughDecorator is Concrete Decorators.
    CookieDoughDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.

    """
    # extends parent base decorator  - IcecreamDecorator
    def __init__(self, customIcecream: Icecream):
        self.customIcecream = customIcecream

    # modifying the makeIcecream component behavior accordingly by add_cookieDough
    def make_icecream(self) -> str:
        return self.customIcecream.make_icecream() + self.add_cookieDough()

    # add Cookie Dough
    def add_cookieDough(self) -> str:
        return " -> add CookieDough"

def main():
    # create VanillaIcecream instance
    vanilla_icecream = VanillaIcecream()
    result: str = vanilla_icecream.make_icecream()
    print(result)

    print("preparing Vanilla Icecream using Chocolate")
    # create ChocolateDecorator instance 
    chocolate_decorator = ChocolateDecorator(vanilla_icecream)
    result = chocolate_decorator.make_icecream()
    print(' ==> {}'.format(result))
    
    print("preparing Vanilla Icecream using Raspberries and Chocolate")   
    # create RaspberriesDecorator instance 
    raspberries_decorator = RaspberriesDecorator(chocolate_decorator)
    result = raspberries_decorator.make_icecream()
    print(' ==> {}'.format(result))  

    print("preparing Vanilla Icecream using CookieDough") 
    # create RaspberriesDecorator instance  
    cookie_doughDecorator = CookieDoughDecorator(vanilla_icecream)
    result = cookie_doughDecorator.make_icecream()
    print(' ==> {}'.format(result))  


if __name__ == '__main__':
    main()