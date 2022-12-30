"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPaymentStrategy = void 0;
/**
 * CreditCardPaymentStrategy as ConcreteStrategy Classes.
 * CreditCardPaymentStrategy implementation of Strategy interface - PaymentStrategy implements an CreditCard payment algorithm.
 *
 * @Author Bridget Wu
 */
class CreditCardPaymentStrategy {
    /**
     * CreditCard Payment implementation detail
     *
     * @param price
     */
    pay(price) {
        console.log("Charged total prices $" + price + " from CreditCard.");
    }
}
exports.CreditCardPaymentStrategy = CreditCardPaymentStrategy;
