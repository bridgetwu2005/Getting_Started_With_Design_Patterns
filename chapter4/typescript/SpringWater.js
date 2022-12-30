"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpringWater = void 0;
/**
 * SpringWater product information
 *
 * @Author Bridget Wu
 */
class SpringWater {
    constructor(price) {
        this.id = 1;
        this.name = "Spring Water";
        this.price = 0;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getPrice() {
        return this.price;
    }
    getName() {
        return this.name;
    }
}
exports.SpringWater = SpringWater;
