import { Product } from "./Product";

/**
 * PotatoChip product information
 *
 * @Author Bridget Wu
 */
 export class PotatoChip implements Product {
    private id: number = 2;

    private name: String = "Potato Chip";

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
