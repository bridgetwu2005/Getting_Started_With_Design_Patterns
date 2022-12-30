package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * ShoppingCart as Context,
 * ShoppingCart contains a reference to Strategy object - PaymentStrategy.
 * A context implements all common behaviours which doesn't vary and depends on Strategy object for performing any variable behaviour.
 * When context object receives requests from the client to perform any variable behaviour it delegates them to the Strategy object.
 *
 * @Author Bridget Wu
 */
public class ShoppingCart {

    private List<Product> products = new ArrayList<>();

    private PaymentStrategy createCardPaymentStrategy;

    private PaymentStrategy applePayPaymentPaymentStrategy;

    /**
     * ShoppingCart(PaymentStrategy) have a reference to Strategy object to perform any variable behaviour.
     */
    public ShoppingCart() {
        this.createCardPaymentStrategy = new CreditCardPaymentStrategy();
        this.applePayPaymentPaymentStrategy = new ApplePayPaymentStrategy();
    }

    /**
     * A ShoppingCart context implements all common behaviours which doesn't vary and depends on Strategy object for performing any variable behaviour.
     *
     * @param paymentType
     */
    public void pay(String paymentType) {
        int total = getTotal();
        if ("CreditCard".equals(paymentType)) {
            this.createCardPaymentStrategy.pay(total);
        } else if ("ApplePay".equals(paymentType)) {
            this.applePayPaymentPaymentStrategy.pay(total);
        } else {
            throw new UnsupportedOperationException("Payment type: " + paymentType + " is not supported");
        }
    }

    /**
     * add various products in shopping cart
     *
     * @param product
     */
    public void addProduct(Product product) {
        products.add(product);
    }

    /**
     * get total product price
     *
     * @return
     */
    public int getTotal() {
        int total = 0;
        for (Product product : products) {
            total = total + product.getPrice();
        }
        return total;
    }

    /**
     * print product info
     */
    public void printProductInfo() {
        if (!products.isEmpty()) {
            System.out.println("Products in shopping cart:");
            for (Product product : products) {
                System.out.println(" -> (id:" + product.getId() + " name: " + product.getName() + ", price: " + product.getPrice() + ")");
            }
            System.out.println("Total Price: $" + getTotal());
        }

    }
}
