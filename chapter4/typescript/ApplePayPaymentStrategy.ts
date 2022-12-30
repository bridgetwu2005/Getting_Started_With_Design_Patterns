import { PaymentStrategy } from "./PaymentStrategy";

/**
 * ApplePayPaymentStrategy as ConcreteStrategy Classes.
 * ApplePayPaymentStrategy implementation of Strategy interface - PaymentStrategy implements an ApplePay payment algorithm.
 *
 * @Author Bridget Wu
 */
 export class ApplePayPaymentStrategy implements PaymentStrategy {
    /**
     * ApplePay Payment implementation detail
     *
     * @param price
     */
    public pay(price: number): void {
        console.log("Charged total prices $" + price + " from ApplePay.");
    }
}
