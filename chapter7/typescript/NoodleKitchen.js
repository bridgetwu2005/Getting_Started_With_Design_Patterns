"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoodleKitchen = void 0;
/**
 * Noodle Kitchen will prepare and cook Noodle per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
class NoodleKitchen {
    /**
     * make noodle food based on customer order items
     *
     * @param items
     */
    makeFood(items) {
        if (items && items.length > 0) {
            console.log("cook Noodle:[");
            for (let item of items) {
                console.log(" {" + item + "} ");
            }
            console.log("]");
        }
    }
}
exports.NoodleKitchen = NoodleKitchen;
