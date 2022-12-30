import { ApplePayPaymentStrategy } from "./ApplePayPaymentStrategy";
import { CreditCardPaymentStrategy } from "./CreditCardPaymentStrategy";
import { PaymentStrategy } from "./PaymentStrategy";
import { Product } from "./Product";

/**
 * ShoppingCart as Context,
 * ShoppingCart contains a reference to Strategy object - PaymentStrategy.
 * A context implements all common behaviours which doesn't vary and depends on Strategy object for performing any variable behaviour.
 * When context object receives requests from the client to perform any variable behaviour it delegates them to the Strategy object.
 *
 * @Author Bridget Wu
 */
 export class ShoppingCart {

    private products: Product[] = [];

    private createCardPaymentStrategy: PaymentStrategy;

    private applePayPaymentPaymentStrategy: PaymentStrategy;

    /**
     * ShoppingCart(PaymentStrategy) have a reference to Strategy object to perform any variable behaviour.
     */
    public constructor() {
        this.createCardPaymentStrategy = new CreditCardPaymentStrategy();
        this.applePayPaymentPaymentStrategy = new ApplePayPaymentStrategy();
    }

    /**
     * A ShoppingCart context implements all common behaviours which doesn't vary and depends on Strategy object for performing any variable behaviour.
     *
     * @param paymentType
     */
    public pay(paymentType: String): void {
        let total: number = this.getTotal();
        if ("CreditCard"== paymentType) {
            this.createCardPaymentStrategy.pay(total);
        } else if ("ApplePay" == paymentType) {
            this.applePayPaymentPaymentStrategy.pay(total);
        } else {
            throw new Error("Payment type: " + paymentType + " is not supported");
        }
    }

    /**
     * add various products in shopping cart
     *
     * @param product
     */
    public addProduct(product: Product): void {
        this.products.push(product);
    }

    /**
     * get total product price
     *
     * @return
     */
    public getTotal(): number {
        let total: number = 0;
        for (let product of this.products) {
            total = total +product.getPrice();
        }
        return total;
    }

    /**
     * print product info
     */
    public  printProductInfo(): void {
        if (this.products.length>0) {
            console.log("Products in shopping cart:");
            for (let product of this.products) {
                console.log(" -> (id:" + product.getId() + " name: " + product.getName() + ", price: " + product.getPrice() + ")");
            }
            console.log("Total Price: $" + this.getTotal());
        }

    }
}
