from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

class Pizza:
    '''
        The pizza object is a product component in the builder pattern, contains info about the pizza 
        :name arg: This is pizza name
        :toppings arg: This is pizza toppings defined as an array. Pizza builders can continue to add topping during the build process. 
        :sauces arg: This is pizza sauces defined as an array. Pizza builders can continue to add topping during the build process. 
    '''
    # initialized Pizza, we set the Pizza name
    def __init__(self, name):
        self.name = name
        self.size = ''
        self.toppings = []
        self.sauces = []

    # This function adds sauce to Pizza
    def add_sauce(self, sauce):
        self.sauces.append(sauce)

    # This function adds topping to Pizza
    def add_topping(self, topping):
        self.toppings.append(topping)

   # This function set the size of Pizza
    def set_size(self, size):
        self.size = size

    # print Pizza detail
    def __str__(self):
        _topping = ', '.join(self.toppings)
        _sauces = ', '.join(self.sauces)
        info = (f'{"=================="}',
                f'Pizza: {self.name}',
                f'Size: {self.size}',
                f'Topping: { _topping }',
                f'Sauces: { _sauces}')
        return  '\n'.join(info)




class PizzaBuilder(ABC):
    """
    The Builder interface specifies methods for creating the different parts of
    the Product objects.
    """
    @abstractmethod
    def add_sauce(sauce: str) -> ABC:
        pass

    @abstractmethod
    def add_topping(topping: str) -> ABC:
        pass

    @abstractmethod
    def build_size(size: str) -> ABC:
        pass

    @abstractmethod
    def create_pizza(self) -> ABC:
        pass

    @abstractmethod
    def get_pizza(self) -> Pizza:
        pass

class PepperoniPizzaBuilder(PizzaBuilder):
    """
    The Pepperoni PizzaBuilder inheritance and implement PizzaBuilder methods for creating the different parts of the Pizza components.
    add_pepperoni is added when create Pepperoni Pizza with Pizza name - 'Pepperoni Pizza'
    """
    def __init__(self):
        pass

    def add_sauce(self, sauce) -> PizzaBuilder:
        self.pizza.add_sauce(sauce)
        return self

    def build_size(self, size) -> PizzaBuilder:
        self.pizza.set_size(size)
        return self

    def add_topping(self, topping) -> PizzaBuilder:
        self.pizza.add_topping(topping)
        return self

    def create_pizza(self) -> PizzaBuilder:
        self.pizza = Pizza('Pepperoni Pizza')
        self.add_pepperoni()
        return self

    def add_pepperoni(self)  -> PizzaBuilder:
        self.pizza.add_topping('Pepperoni')
        return self

    def get_pizza(self) -> Pizza:
        return self.pizza

class CheesePizzaBuilder(PizzaBuilder):
    """
    The Cheese PizzaBuilder inheritance and implement PizzaBuilder methods for creating the different parts of the Pizza components.
    add_cheese is added when create Cheese Pizza with Pizza name - 'Cheese Pizza'
    """
    def __init__(self):
        pass

    def add_sauce(self, sauce)  -> PizzaBuilder:
        self.pizza.add_sauce(sauce)
        return self

    def build_size(self, size) -> PizzaBuilder:
        self.pizza.set_size(size)
        return self

    def add_topping(self, topping) -> PizzaBuilder:
        self.pizza.add_topping(topping)
        return self

    def create_pizza(self) -> PizzaBuilder:
        self.pizza = Pizza('Cheese Pizza')
        self.add_cheese()
        return self

    def add_cheese(self)  -> PizzaBuilder:
        self.pizza.add_topping('Cheese')
        return self

    def get_pizza(self) -> Pizza:
        return self.pizza


def main():
    pepperoniPizzaBuilder = PepperoniPizzaBuilder()
    pepperoniPizzaBuilder.create_pizza().build_size("LARGE").add_topping("Mushrooms").add_topping("Onions").add_sauce("Buffalo Sauce")
    pepperoniPizza = pepperoniPizzaBuilder.get_pizza()
    print(pepperoniPizza)

    cheesePizzaBuilder = CheesePizzaBuilder()
    cheesePizzaBuilder.create_pizza().build_size("SMALL").add_topping("Green pepper").add_topping("Tomato").add_sauce("Barbecue Sauce")
    cheesePizza = cheesePizzaBuilder.get_pizza()
    print(cheesePizza)

if __name__ == '__main__':
    main()