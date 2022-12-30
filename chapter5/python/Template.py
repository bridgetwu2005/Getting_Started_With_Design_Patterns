from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

'''
    Chapter 5: Template Design Pattern
    In the Template design pattern,  an abstract class defines the steps as a template to execute an algorithm in a template method without implementing some steps of the algorithm.
    The abstract may contain the default implementation of some algorithm steps that might be common for all or some subclasses.
    The abstract class's subclasses can override the algorithm's specific steps as per the requirement of the subclasses.
    Still, the algorithm execution sequence will follow steps defined by an abstract base class.
    A template pattern is a behavior design pattern.

'''
class PizzaRequest:
    '''
        Pizza request sending from client request with toppings and sauces
    '''
    # initialized Pizza request, set the default Pizza toppings, sauces as empty
    def __init__(self):
        self.toppings = []
        self.sauces = []

   # This function ge the sauces of Pizza request
    def get_sauces(self): 
        return self.sauces

    # This function adds sauce to Pizza
    def add_sauce(self, sauce):
        self.sauces.append(sauce)

   # This function ge the toppings of Pizza request
    def get_topping(self): 
        return self.toppings

    # This function adds topping to Pizza
    def add_topping(self, topping):
        self.toppings.append(topping)


class Pizza(ABC):
    """
    Abstract class Pizza contains template method order which defines the algorithm/steps to prepare pizza with abstract methods.
    """
    def order(self, pizza_request: PizzaRequest):
        # Prepare Pizza Base
        self.__prepare_pizza()
        self.add_topping()
        # Add Sauces
        self.add_sauces(pizza_request)
        # Add Toppings
        self.add_more_toppings(pizza_request)
        # Bake Pizza
        self.__bake_pizza()
    
    # Declaring private method
    def __prepare_pizza(self):
        '''
         prepare Pizza Base. This is private method, no accessible by subclass.
         subclass can't call or overwrite this method. 
         all pizza class will call preparePizzaBase
        '''
        print("=== prepare pizza ===")
        print(" -> Prepare Pizza Material")
        print(" -> Make the Dough")
        print(" -> Shape the dough")


    # addTopping is abstract method, the subclass need implements this method
    @abstractmethod
    def add_topping(self,topping: str):
        pass

    # addMoreToppings method don't add any toppings by default. Subclass can overwrite this method to add their own toppings
    def add_more_toppings(self, pizza_request: PizzaRequest):
        toppings = pizza_request.get_topping()
        if len(toppings) >0: 
            print("add topping:[")
            for topping in toppings:
                print(" ( {} )".format(topping))
            print(" ]")

    # addSauces method don't add any sauces by default. Subclass can overwrite this method to add their own sauces
    def add_sauces(self, pizza_request: PizzaRequest):
        sauces = pizza_request.get_sauces()
        if len(sauces) >0: 
            print("add sauces:[")
            for sauce in sauces:
                print(" ({})".format(sauce))
            print(" ]")

    # Declaring private method
    def __bake_pizza(self):
        '''
        bake pizza. This is private method, no accessible by subclass
        subclass can't call or overwrite this method
        all pizza class will call bakePizza
        '''
        print("=== Bake pizza ===")

class PepperoniPizza(Pizza): 
    """
       PepperoniPizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Pepperoni pizza.
    """
    def add_topping(self):
        """
            add Pepperoni topping
        """
        print("=== Add Pepperoni topping ===")


class CheesePizza(Pizza): 
    """
       CheesePizza is a concrete class extending abstract class Pizza. It implements abstract methods as per the requirement to prepare a Cheese pizza.
    """
    def add_topping(self):
        """
            add Cheese topping
        """
        print("=== Add Cheese topping === ")

def main():
    # order PepperoniPizza
    pepperoni_pizza = PepperoniPizza()
    pepperoni_pizza_request = PizzaRequest()
    pepperoni_pizza.order(pepperoni_pizza_request)
    print()
     # order CheesePizza with additional topping and sauce
    cheese_pizza = CheesePizza()
    cheese_pizza_request = PizzaRequest()
    cheese_pizza_request.add_topping("Mushroom")
    cheese_pizza_request.add_topping("Sausage")
    cheese_pizza_request.add_sauce("BBQ Sauce")
    cheese_pizza.order(cheese_pizza_request)   

if __name__ == '__main__':
    main()

