"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempuraCommand = void 0;
/**
 * The concrete commands Noodle which will call TempuraKitchen to make food.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
class TempuraCommand {
    /**
     * @param kitchen - TempuraKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    constructor(kitchen, request) {
        this.kitchen = kitchen;
        this.request = request;
    }
    /**
     * execute Tempura order per customer order menu request, Tempura kitchen will  make food
     */
    execute() {
        this.kitchen.makeFood(this.request.getTempuraItems());
    }
}
exports.TempuraCommand = TempuraCommand;
