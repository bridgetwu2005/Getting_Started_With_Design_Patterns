"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieDoughDecorator = void 0;
const IcecreamDecorator_1 = require("./IcecreamDecorator");
/**
 * CookieDoughDecorator is Concrete Decorators
 * CookieDoughDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
class CookieDoughDecorator extends IcecreamDecorator_1.IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    constructor(customIcecream) {
        super(customIcecream);
    }
    /**
     * modifying the makeIcecream component behavior accordingly by addCookieDough
     *
     * @return
     */
    makeIcecream() {
        return `${this.customIcecream.makeIcecream()} ${this.addCookieDough()}`;
    }
    /**
     * addCookieDough operation
     *
     * @return
     */
    addCookieDough() {
        return " -> add CookieDough";
    }
}
exports.CookieDoughDecorator = CookieDoughDecorator;
