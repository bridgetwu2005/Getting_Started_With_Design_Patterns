
/**
 * Chapter 4: Strategy Design Pattern
 * Strategy pattern is also known as Policy Pattern. We define multiple algorithms and let client application pass the algorithm to be used as a parameter.
 * In our ShoppingCart example., ShoppingCart as Context contains a reference to Strategy object
 * When ShoppingCart receives requests from the client, it will delegates them to the selected strategy object
 * ConcreteStrategy Classes CreditCardPaymentStrategy or ApplePayPaymentStrategy will perform the action - pay
 *
 * @Author Bridget Wu
 */

import { PotatoChip } from "./PotatoChip";
import { ShoppingCart } from "./ShoppingCart";
import { SpringWater } from "./SpringWater";

//initialized product
let potatoChip = new PotatoChip(2);
let springWater = new SpringWater(3);

//ShoppingCart pay by CreditCard
console.log("=== ShoppingCart pay by CreditCard ==");
let shoppingCartPayByCreditCard = new ShoppingCart();
//add product to ShoppingCart
shoppingCartPayByCreditCard.addProduct(potatoChip);
shoppingCartPayByCreditCard.addProduct(potatoChip);
shoppingCartPayByCreditCard.addProduct(springWater);
shoppingCartPayByCreditCard.printProductInfo();
//pay by CreditCard
shoppingCartPayByCreditCard.pay("CreditCard");

console.log();
//ShoppingCart pay by ApplePay
console.log("=== ShoppingCart pay by ApplePay ==");
let shoppingCartPayByApplePay = new ShoppingCart();
//add product to ShoppingCart
shoppingCartPayByApplePay.addProduct(potatoChip);
shoppingCartPayByApplePay.addProduct(springWater);
shoppingCartPayByApplePay.addProduct(springWater);
shoppingCartPayByApplePay.printProductInfo();
//pay by ApplePay
shoppingCartPayByApplePay.pay("ApplePay");