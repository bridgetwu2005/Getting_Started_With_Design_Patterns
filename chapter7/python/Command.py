from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

'''
   Chapter 7: Command Design Pattern
   The command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.
   Create invoker class which is a reference to the Command interface to invoke the command.

'''
class OrderMenuRequest:
    """
    client menu order requests, they can order multiple noodle, sushi, tempura items
    """
    # initialized Order Menu Request, set the default noodle_items sushi_items, tempura_items as empty
    def __init__(self):
        self.noodle_items = []
        self.sushi_items = []
        self.tempura_items = []

    # get all noodle orders
    def get_noodle_items(self):
         return self.noodle_items

    # add a noodle order
    def add_noodle_item(self,item):
         return self.noodle_items.append(item)

    # get all sushi orders
    def get_sushi_items(self):
         return self.sushi_items

    # add a sushi order
    def add_sushi_item(self,item):
         return self.sushi_items.append(item)

     # get all tempura orders
    def get_tempura_items(self):
         return self.tempura_items

    # add a tempura order
    def add_tempura_item(self,item):
         return self.tempura_items.append(item)  

class Kitchen(ABC):
    '''
    Kitchen interface define makeFood operation
    '''
    # The makeFood method is declared in the interface to force all concrete commands to implement their own logic.
    def make_food(self):
        pass

class NoodleKitchen(Kitchen): 
    """
        Noodle Kitchen will prepare and cook Noodle per customer order menu
    """
    # make noodle food based on customer order items
    def make_food(self, items):
        if len(items) >0: 
            print("cook Noodle:[")
            for item in items:
                print("({}) ".format(item))
            print(" ]")

class SushiKitchen(Kitchen): 
    """
        sushi Kitchen will prepare and make Sushi per customer order menu
    """
    # make sushi food based on customer order items
    def make_food(self, items):
        if len(items) >0: 
            print("make Sushi:[")
            for item in items:
                print("({}) ".format(item))
            print(" ]")

class TempuraKitchen(Kitchen): 
    """
       Tempura Kitchen will prepare and make Tempura per customer order menu
    """
    # make tempura food based on customer order items
    def make_food(self, items):
        if len(items) >0: 
            print("make Tempura:[")
            for item in items:
                print("({}) ".format(item))
            print(" ]")

class Command(ABC):
    '''
    The base command class defines the common interface for all concrete commands.
    '''
    # The execution method is declared in the interface to force all concrete commands to implement their own logic.
    def execute(self):
        pass

class NoodleCommand(Command): 
    """
       The concrete commands Noodle which will call NoodleKitchen to make food.
    """
    def __init__(self, kitchen: NoodleKitchen, request: OrderMenuRequest) -> None:
        self.kitchen = kitchen
        self.request = request

    # execute Noodle order per customer order menu request, Noodle kitchen will  make food
    def execute(self):
        self.kitchen.make_food(self.request.get_noodle_items())

class SushiCommand(Command): 
    """
       The concrete Sushi commands to call SushiKitchen makeFood.
    """
    def __init__(self, kitchen: SushiKitchen, request: OrderMenuRequest) -> None:
        self.kitchen = kitchen
        self.request = request

    # execute Sushi order per customer order menu request, Sushi kitchen will  make food
    def execute(self):
        self.kitchen.make_food(self.request.get_sushi_items())

class TempuraCommand(Command): 
    """
       The concrete commands Noodle which will call TempuraKitchen to make food.
    """
    def __init__(self, kitchen: TempuraKitchen, request: OrderMenuRequest) -> None:
        self.kitchen = kitchen
        self.request = request

    # execute Tempura order per customer order menu request, Tempura kitchen will  make food
    def execute(self):
        self.kitchen.make_food(self.request.get_tempura_items())

class OrderCenter(): 
    """
    OrderCenter is the command Invoker class, which is a simple class that encapsulates the Command
    and passes the request to the command object to process it.
    """
    # OrderCenter(Command) have a reference to Command interface to invoke the command.
    def __init__(self, commands) -> None:
        self.commands = commands

    # delegate action to command execute method.
    def execute(self):
        for command in self.commands:
            command.execute()

def main():
    orderCommands = []
    #initial OrderMenuRequest
    order_request = OrderMenuRequest()
    # order Noodle items
    order_request.add_noodle_item("Tonkotsu Shoyu Ramen")
    order_request.add_noodle_item("Sanuki udon")
    #create NoodleKitchen
    noodle_kitchen = NoodleKitchen()
    # add Noodle order to NoodleCommand
    noodle_order_command = NoodleCommand(noodle_kitchen, order_request)
    # add NoodleCommand to orderCommands list
    orderCommands.append(noodle_order_command)

    #create SushiKitchen
    sushi_kitchen = SushiKitchen()
    order_request.add_sushi_item("Rainbow Roll")
    order_request.add_sushi_item("Avocado & Salmon Sushi Roll")
    order_request.add_sushi_item("Tuna Sushi Roll (Tekka Maki)")
    # add sushi order to SushiCommand
    sushi_order_command = SushiCommand(sushi_kitchen, order_request)
    # add SushiCommand to orderCommands list
    orderCommands.append(sushi_order_command)

    #create TempuraKitchen
    tempura_kitchen = TempuraKitchen()
    order_request.add_tempura_item("Ebi, shrimp/prawn")
    order_request.add_tempura_item("Kakiage")
    # add tempura order to TempuraCommand
    tempura_order_command = TempuraCommand(tempura_kitchen, order_request)
    # add TempuraCommand to orderCommands list
    orderCommands.append(tempura_order_command)    

    # send all order command to OrderCenter to execute order commands
    orderCenter = OrderCenter(orderCommands)
    orderCenter.execute()

if __name__ == '__main__':
    main()