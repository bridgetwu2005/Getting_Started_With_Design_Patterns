"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChocolateDecorator = void 0;
const IcecreamDecorator_1 = require("./IcecreamDecorator");
/**
 * ChocolateDecorator is Concrete Decorators
 * ChocolateDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
class ChocolateDecorator extends IcecreamDecorator_1.IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    constructor(customIcecream) {
        super(customIcecream);
    }
    /**
     * modifying the makeIcecream component behavior accordingly by addChocolate
     *
     * @return
     */
    makeIcecream() {
        return `${this.customIcecream.makeIcecream()} ${this.addChocolate()}`;
    }
    /**
     * addChocolate operation
     *
     * @return
     */
    addChocolate() {
        return " -> add chocolate";
    }
}
exports.ChocolateDecorator = ChocolateDecorator;
