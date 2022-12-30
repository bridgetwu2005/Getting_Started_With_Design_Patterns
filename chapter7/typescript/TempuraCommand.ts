import { Command } from "./Command";
import { OrderMenuRequest } from "./OrderMenuRequest";
import { TempuraKitchen } from "./TempuraKitchen";

/**
 * The concrete commands Noodle which will call TempuraKitchen to make food.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export class TempuraCommand implements Command {

    private kitchen: TempuraKitchen;

    private request: OrderMenuRequest;
    /**
     * @param kitchen - TempuraKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    public constructor(kitchen: TempuraKitchen, request: OrderMenuRequest ) {
        this.kitchen = kitchen;
        this.request = request;
    }

    /**
     * execute Tempura order per customer order menu request, Tempura kitchen will  make food
     */
    public execute(): void {
        this.kitchen.makeFood(this.request.getTempuraItems());
    }
}
