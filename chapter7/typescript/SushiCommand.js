"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiCommand = void 0;
/**
 * The concrete Sushi commands to call SushiKitchen makeFood.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
class SushiCommand {
    /**
     * @param kitchen - SushiKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    constructor(kitchen, request) {
        this.kitchen = kitchen;
        this.request = request;
    }
    /**
      * execute Sushi order per customer order menu request, Sushi kitchen will  make food
      */
    execute() {
        this.kitchen.makeFood(this.request.getSushiItems());
    }
}
exports.SushiCommand = SushiCommand;
