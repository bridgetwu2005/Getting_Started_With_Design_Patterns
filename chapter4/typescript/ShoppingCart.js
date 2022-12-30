"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const ApplePayPaymentStrategy_1 = require("./ApplePayPaymentStrategy");
const CreditCardPaymentStrategy_1 = require("./CreditCardPaymentStrategy");
/**
 * ShoppingCart as Context,
 * ShoppingCart contains a reference to Strategy object - PaymentStrategy.
 * A context implements all common behaviours which doesn't vary and depends on Strategy object for performing any variable behaviour.
 * When context object receives requests from the client to perform any variable behaviour it delegates them to the Strategy object.
 *
 * @Author Bridget Wu
 */
class ShoppingCart {
    /**
     * ShoppingCart(PaymentStrategy) have a reference to Strategy object to perform any variable behaviour.
     */
    constructor() {
        this.products = [];
        this.createCardPaymentStrategy = new CreditCardPaymentStrategy_1.CreditCardPaymentStrategy();
        this.applePayPaymentPaymentStrategy = new ApplePayPaymentStrategy_1.ApplePayPaymentStrategy();
    }
    /**
     * A ShoppingCart context implements all common behaviours which doesn't vary and depends on Strategy object for performing any variable behaviour.
     *
     * @param paymentType
     */
    pay(paymentType) {
        let total = this.getTotal();
        if ("CreditCard" == paymentType) {
            this.createCardPaymentStrategy.pay(total);
        }
        else if ("ApplePay" == paymentType) {
            this.applePayPaymentPaymentStrategy.pay(total);
        }
        else {
            throw new Error("Payment type: " + paymentType + " is not supported");
        }
    }
    /**
     * add various products in shopping cart
     *
     * @param product
     */
    addProduct(product) {
        this.products.push(product);
    }
    /**
     * get total product price
     *
     * @return
     */
    getTotal() {
        let total = 0;
        for (let product of this.products) {
            total = total + product.getPrice();
        }
        return total;
    }
    /**
     * print product info
     */
    printProductInfo() {
        if (this.products.length > 0) {
            console.log("Products in shopping cart:");
            for (let product of this.products) {
                console.log(" -> (id:" + product.getId() + " name: " + product.getName() + ", price: " + product.getPrice() + ")");
            }
            console.log("Total Price: $" + this.getTotal());
        }
    }
}
exports.ShoppingCart = ShoppingCart;
