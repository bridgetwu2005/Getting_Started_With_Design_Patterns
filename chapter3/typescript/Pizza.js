"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
/**
 * Pizza TypeScript class
 *
 * @Author: Bridget
 */
class Pizza {
    constructor(name) {
        this.size = "";
        this.toppings = [];
        this.sauces = [];
        this.name = name;
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    getToppings() {
        return this.toppings;
    }
    addToppings(topping) {
        this.toppings.push(topping);
    }
    getSauces() {
        return this.sauces;
    }
    addSauces(sauce) {
        this.sauces.push(sauce);
    }
    getName() {
        return this.name;
    }
    toString() {
        return `Pizza{" +
        "name='" + ${this.name} + '\'' +
        ", size='" + ${this.size}  + '\'' +
        ", toppings=" + ${this.toppings} +
        ", sauces=" + ${this.sauces} +
        '}'`;
    }
}
exports.Pizza = Pizza;
