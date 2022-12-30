"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoodleCommand = void 0;
/**
 * The concrete commands Noodle which will call NoodleKitchen to make food.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
class NoodleCommand {
    /**
     * @param kitchen - NoodleKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    constructor(kitchen, request) {
        this.kitchen = kitchen;
        this.request = request;
    }
    /**
        * execute Noodle order per customer order menu request, Noodle kitchen will  make food
        */
    execute() {
        this.kitchen.makeFood(this.request.getNoodleItems());
    }
}
exports.NoodleCommand = NoodleCommand;
