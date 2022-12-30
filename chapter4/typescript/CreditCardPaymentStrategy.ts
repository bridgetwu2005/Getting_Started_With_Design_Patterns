import { PaymentStrategy } from "./PaymentStrategy";

/**
 * CreditCardPaymentStrategy as ConcreteStrategy Classes.
 * CreditCardPaymentStrategy implementation of Strategy interface - PaymentStrategy implements an CreditCard payment algorithm.
 *
 * @Author Bridget Wu
 */
 export class CreditCardPaymentStrategy implements PaymentStrategy {
    /**
     * CreditCard Payment implementation detail
     *
     * @param price
     */
    public pay(price: number): void {
        console.log("Charged total prices $" + price + " from CreditCard.");
    }
}
