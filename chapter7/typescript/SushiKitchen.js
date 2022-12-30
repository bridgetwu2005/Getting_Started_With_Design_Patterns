"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiKitchen = void 0;
/**
 * Sushi Kitchen will prepare and make Sushi per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
class SushiKitchen {
    /**
     * make sushi food based on customer order items
     *
     * @param items
     */
    makeFood(items) {
        if (items && items.length > 0) {
            console.log("cook Sushi:[");
            for (let item of items) {
                console.log(" {" + item + "} ");
            }
            console.log("]");
        }
    }
}
exports.SushiKitchen = SushiKitchen;
