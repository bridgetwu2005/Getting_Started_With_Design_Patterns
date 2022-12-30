import { Command } from "./Command";
import { OrderMenuRequest } from "./OrderMenuRequest";
import { SushiKitchen } from "./SushiKitchen";

/**
 * The concrete Sushi commands to call SushiKitchen makeFood.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export class SushiCommand implements Command {

    private kitchen: SushiKitchen;

    private request: OrderMenuRequest;
    /**
     * @param kitchen - SushiKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    public constructor(kitchen: SushiKitchen, request: OrderMenuRequest ) {
        this.kitchen = kitchen;
        this.request = request;
    }

   /**
     * execute Sushi order per customer order menu request, Sushi kitchen will  make food
     */
    public execute(): void {
        this.kitchen.makeFood(this.request.getSushiItems());
    }
}
