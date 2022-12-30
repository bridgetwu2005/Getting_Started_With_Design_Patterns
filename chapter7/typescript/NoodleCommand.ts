import { Command } from "./Command";
import { NoodleKitchen } from "./NoodleKitchen";
import { OrderMenuRequest } from "./OrderMenuRequest";

/**
 * The concrete commands Noodle which will call NoodleKitchen to make food.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export class NoodleCommand implements Command {

    private kitchen: NoodleKitchen;

    private request: OrderMenuRequest;
    /**
     * @param kitchen - NoodleKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    public constructor(kitchen: NoodleKitchen, request: OrderMenuRequest ) {
        this.kitchen = kitchen;
        this.request = request;
    }

 /**
     * execute Noodle order per customer order menu request, Noodle kitchen will  make food
     */
    public execute(): void {
        this.kitchen.makeFood(this.request.getNoodleItems());
    }
}
