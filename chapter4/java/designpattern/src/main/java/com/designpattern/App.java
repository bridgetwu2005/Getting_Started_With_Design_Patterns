package com.designpattern;

/**
 * Chapter 4: Strategy Design Pattern
 * Strategy pattern is also known as Policy Pattern. We define multiple algorithms and let client application pass the algorithm to be used as a parameter.
 * In our ShoppingCart example., ShoppingCart as Context contains a reference to Strategy object
 * When ShoppingCart receives requests from the client, it will delegates them to the selected strategy object
 * ConcreteStrategy Classes CreditCardPaymentStrategy or ApplePayPaymentStrategy will perform the action - pay
 *
 * @Author Bridget Wu
 */
public class App {
    public static void main(String[] args) {
        //initialized product
        Product potatoChip = new PotatoChip(2);
        SpringWater springWater = new SpringWater(3);

        //ShoppingCart pay by CreditCard
        System.out.println("=== ShoppingCart pay by CreditCard ==");
        ShoppingCart shoppingCartPayByCreditCard = new ShoppingCart();
        //add products to ShoppingCart
        shoppingCartPayByCreditCard.addProduct(potatoChip);
        shoppingCartPayByCreditCard.addProduct(potatoChip);
        shoppingCartPayByCreditCard.addProduct(springWater);
        shoppingCartPayByCreditCard.printProductInfo();
        //pay by CreditCard
        shoppingCartPayByCreditCard.pay("CreditCard");

        System.out.println();
        //ShoppingCart pay by ApplePay
        System.out.println("=== ShoppingCart pay by ApplePay ==");
        ShoppingCart shoppingCartPayByApplePay = new ShoppingCart();
        //add products to ShoppingCart
        shoppingCartPayByApplePay.addProduct(potatoChip);
        shoppingCartPayByApplePay.addProduct(springWater);
        shoppingCartPayByApplePay.addProduct(springWater);
        shoppingCartPayByApplePay.printProductInfo();
        //pay by ApplePay
        shoppingCartPayByApplePay.pay("ApplePay");

    }
}
