"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempuraKitchen = void 0;
/**
 * Tempura Kitchen will prepare and make Tempura per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
class TempuraKitchen {
    /**
     * make tempura food based on customer order items
     *
     * @param items
     */
    makeFood(items) {
        if (items && items.length > 0) {
            console.log("cook Tempura:[");
            for (let item of items) {
                console.log(" {" + item + "} ");
            }
            console.log("]");
        }
    }
}
exports.TempuraKitchen = TempuraKitchen;
