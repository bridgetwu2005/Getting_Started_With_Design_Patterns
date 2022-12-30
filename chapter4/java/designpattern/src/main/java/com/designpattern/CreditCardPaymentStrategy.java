package com.designpattern;

/**
 * CreditCardPaymentStrategy as ConcreteStrategy class.
 * CreditCardPaymentStrategy implementation of PaymentStrategy interface with an CreditCard payment algorithm.
 *
 * @Author Bridget Wu
 */
public class CreditCardPaymentStrategy implements PaymentStrategy {
    /**
     * CreditCard Payment implementation detail
     *
     * @param price
     */
    @Override
    public void pay(int price) {
        System.out.println("Charged total prices $" + price + " from CreditCard.");
    }
}
