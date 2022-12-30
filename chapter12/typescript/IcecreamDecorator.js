"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IcecreamDecorator = void 0;
/**
 * Decorator class implements the component interface - Icecream and it has a HAS-A relationship with the component interface.
 * The component variable should be accessible to the child decorator classes, so we will make this variable protected.
 *
 * @Author Bridget Wu
 */
class IcecreamDecorator {
    /**
     * passing Icecream in constructor and can make custom Icecream
     *
     * @param customIcecream
     */
    constructor(customIcecream) {
        this.customIcecream = customIcecream;
    }
    /**
     * make make Icecream
     *
     * @return
     */
    makeIcecream() {
        return this.customIcecream.makeIcecream();
    }
}
exports.IcecreamDecorator = IcecreamDecorator;
