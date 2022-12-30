package com.designpattern;

/**
 * ApplePayPaymentStrategy as ConcreteStrategy Classes.
 * ApplePayPaymentStrategy implementation of PaymentStrategy interface with an ApplePay payment algorithm.
 *
 * @Author Bridget Wu
 */
public class ApplePayPaymentStrategy implements PaymentStrategy {

    /**
     * ApplePay Payment implementation detail
     *
     * @param price
     */
    @Override
    public void pay(int price) {
        System.out.println("Charged total prices $" + price + " from ApplePay.");
    }
}