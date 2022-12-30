"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotatoChip = void 0;
/**
 * PotatoChip product information
 *
 * @Author Bridget Wu
 */
class PotatoChip {
    constructor(price) {
        this.id = 2;
        this.name = "Potato Chip";
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
exports.PotatoChip = PotatoChip;
