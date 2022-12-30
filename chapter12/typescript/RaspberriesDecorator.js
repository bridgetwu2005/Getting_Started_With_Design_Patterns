"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaspberriesDecorator = void 0;
const IcecreamDecorator_1 = require("./IcecreamDecorator");
/**
 * RaspberriesDecorator is Concrete Decorators
 * RaspberriesDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
class RaspberriesDecorator extends IcecreamDecorator_1.IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    constructor(customIcecream) {
        super(customIcecream);
    }
    /**
     * modifying the makeIcecream component behavior accordingly by addRaspberries
     *
     * @return
     */
    makeIcecream() {
        return `${this.customIcecream.makeIcecream()} ${this.addRaspberries()})`;
    }
    /**
     * addRaspberries operation
     *
     * @return
     */
    addRaspberries() {
        return " -> add Freeze-Dried raspberries";
    }
}
exports.RaspberriesDecorator = RaspberriesDecorator;
