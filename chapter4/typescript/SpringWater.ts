import { Product } from "./Product";

/**
 * SpringWater product information
 *
 * @Author Bridget Wu
 */
 export class SpringWater implements Product {

    private id: number = 1;

    private name: String = "Spring Water";

    private price: number =0 ;

    public constructor(price: number) {
        this.price = price;
    }

    public getId(): number {
        return this.id;
    }

    public getPrice(): number {
        return this.price;
    }

    public getName(): String {
        return this.name;
    }

}
