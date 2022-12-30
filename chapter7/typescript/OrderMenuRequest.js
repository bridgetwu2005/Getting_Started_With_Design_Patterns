"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMenuRequest = void 0;
/**
 * client menu order requests, they can order multiple noodle, sushi, tempura items
 *
 * @version 1.0.0
 * @Author Bridget Wu
 */
class OrderMenuRequest {
    constructor() {
        this.noodleItems = [];
        this.sushiItems = [];
        this.tempuraItems = [];
    }
    /**
     * get all noodle orders
     *
     * @return
     */
    getNoodleItems() {
        return this.noodleItems;
    }
    /**
     * add a noodle order
     *
     * @param item
     */
    addNoodleItem(item) {
        this.noodleItems.push(item);
    }
    /**
     * get all sushi orders
     *
     * @return
     */
    getSushiItems() {
        return this.sushiItems;
    }
    /**
     * add a sushi order
     *
     * @param item
     */
    addSushiItem(item) {
        this.sushiItems.push(item);
    }
    /**
     * get all tempura orders
     *
     * @return
     */
    getTempuraItems() {
        return this.tempuraItems;
    }
    /**
     * add a tempura order
     *
     * @param item
     */
    addTempuraItem(item) {
        this.tempuraItems.push(item);
    }
}
exports.OrderMenuRequest = OrderMenuRequest;
