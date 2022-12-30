"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplePayPaymentStrategy = void 0;
/**
 * ApplePayPaymentStrategy as ConcreteStrategy Classes.
 * ApplePayPaymentStrategy implementation of Strategy interface - PaymentStrategy implements an ApplePay payment algorithm.
 *
 * @Author Bridget Wu
 */
class ApplePayPaymentStrategy {
    /**
     * ApplePay Payment implementation detail
     *
     * @param price
     */
    pay(price) {
        console.log("Charged total prices $" + price + " from ApplePay.");
    }
}
exports.ApplePayPaymentStrategy = ApplePayPaymentStrategy;
