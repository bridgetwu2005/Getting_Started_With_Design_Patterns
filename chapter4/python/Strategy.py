from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

'''
    Chapter 4: Strategy Design Pattern
    Strategy pattern is also known as Policy Pattern. We define multiple algorithms and let client application pass the algorithm to be used as a parameter.
    In our ShoppingCart example., ShoppingCart as Context contains a reference to Strategy object
    When ShoppingCart receives requests from the client, it will delegates them to the selected strategy object
    ConcreteStrategy Classes CreditCardPaymentStrategy or ApplePayPaymentStrategy will perform the action - pay

'''
class Product(ABC):
    '''
    define product interface.
    '''
    # product price
    def get_price(self) -> int:
        pass

    # product ID
    def get_id(self) -> int:
        pass

    # product Name
    def get_name(self) -> str:
        pass

class PotatoChip(Product):
    '''
    define PotatoChip product information.
    '''
    # set PotatoChip default value
    def __init__(self, price: int ) -> None:
        self.price = price
        self.id = 2
        self.name = "Potato Chip"


    # product price
    def get_price(self) -> int:
        return self.price

    # product ID
    def get_id(self) -> int:
        return  self.id

    # product Name
    def get_name(self) -> str:
        return  self.name

class SpringWater(Product):
    '''
    define SpringWater product information.
    '''
    # set SpringWater default value
    def __init__(self, price: int) -> None:
        self.price = price
        self.id = 1
        self.name = "Spring Water"


    # product price
    def get_price(self) -> int:
        return self.price

    # product ID
    def get_id(self) -> int:
        return self.id

    # product Name
    def get_name(self) -> str:
        return  self.name

class PaymentStrategy(ABC):
    '''
     Strategy interface defining an action which every algorithm class must implement- pay
     and concrete strategy classes implementing the Strategy interface
     Context (ShoppingCart) interacts with various strategy implementation using this interface only.
     Context is not aware of that with which Strategy implementation it is interacting with.

    '''
    # payment strategy action algorithm
    def pay(self, price: int):
        pass

class ApplePayPaymentStrategy(PaymentStrategy):
    '''
     ApplePayPaymentStrategy as ConcreteStrategy Classes.
     ApplePayPaymentStrategy implementation of PaymentStrategy interface with an ApplePay payment algorithm.

    '''
    # ApplePay Payment implementation detail
    def pay(self, price: int):
        print('Charged total prices $ {} from ApplePay.'.format(price))

class CreditCardPaymentStrategy(PaymentStrategy):
    '''
     CreditCardPaymentStrategy as ConcreteStrategy Classes.
     CreditCardPaymentStrategy implementation of PaymentStrategy interface with an CreditCard payment algorithm.

    '''
    # CreditCard Payment implementation detail
    def pay(self, price: int):
        print('Charged total prices $ {} from CreditCard.'.format(price))


class ShoppingCart:
    '''
     ShoppingCart as Context,
     ShoppingCart contains a reference to Strategy object - PaymentStrategy.
     A context implements all common behaviours which doesn't vary and depends on Strategy object for performing any variable behaviour.
     When context object receives requests from the client to perform any variable behaviour it delegates them to the Strategy object.

    '''
    def __init__(self) -> None:
        '''
        set shoppingcart default value
        ShoppingCart(PaymentStrategy) have a reference to Strategy object to perform any variable behaviour.
        '''
        self.credit_card_payment_strategy = CreditCardPaymentStrategy()
        self.apple_pay_payment_strategy = ApplePayPaymentStrategy()
        self.products = []


    # CreditCard Payment implementation detail
    def pay(self, payment_type: str):
        '''
        A ShoppingCart context implements all common behaviours which doesn't vary 
        and depends on Strategy object for performing any variable behaviour.
        '''
        total = self.get_total()
        if "CreditCard" == payment_type:
           self.credit_card_payment_strategy.pay(total)
        elif "ApplePay" == payment_type:
            self.apple_pay_payment_strategy.pay(total)
        else:
             raise Exception("Payment type: {} is not supported".format(payment_type))

    # add various products in shopping cart
    def add_product(self, product: Product):
        self.products.append(product)

    # get total product price
    def get_total(self) -> int:
        total: int = 0
        for product in self.products:
          total = total + product.get_price()
        return total

    # print product info
    def print_product_info(self):
        if len(self.products) >0: 
            print("Products in shopping cart:")
        for product in self.products:
            print(" -> (id: {} name: {}, price: {})".format(str(product.get_id()), product.get_name(), str(product.get_price())))
        print("Total Price: $ {}".format(str(self.get_total())))

def main():
    # initialized product
    potato_chip = PotatoChip(2)
    spring_water = SpringWater(3)

    #  ShoppingCart pay by CreditCard
    print("=== ShoppingCart pay by CreditCard ==")
    #  create a ShoppingCart
    shopping_cart_pay_by_creditcard = ShoppingCart()
    # add products to ShoppingCart
    shopping_cart_pay_by_creditcard.add_product(potato_chip)
    shopping_cart_pay_by_creditcard.add_product(potato_chip)
    shopping_cart_pay_by_creditcard.add_product(spring_water)
    shopping_cart_pay_by_creditcard.print_product_info()
    # pay by CreditCard
    shopping_cart_pay_by_creditcard.pay("CreditCard")
    print("")

    #  ShoppingCart pay by ApplePay
    print("=== ShoppingCart pay by ApplePay ==")
    #  create a ShoppingCart
    shopping_cart_pay_by_applepay = ShoppingCart()
    # add products to ShoppingCart
    shopping_cart_pay_by_applepay.add_product(potato_chip)
    shopping_cart_pay_by_applepay.add_product(spring_water)
    shopping_cart_pay_by_applepay.add_product(spring_water)
    shopping_cart_pay_by_applepay.print_product_info()
    # pay by ApplePay
    shopping_cart_pay_by_applepay.pay("ApplePay")

if __name__ == '__main__':
    main()