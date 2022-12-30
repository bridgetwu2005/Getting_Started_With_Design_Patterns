import { Icecream } from "./Icecream";
import { IcecreamDecorator } from "./IcecreamDecorator";

/**
 * CookieDoughDecorator is Concrete Decorators
 * CookieDoughDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
 export class CookieDoughDecorator extends IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    public constructor(customIcecream: Icecream) {
        super(customIcecream);
    }

    /**
     * modifying the makeIcecream component behavior accordingly by addCookieDough
     *
     * @return
     */
    public makeIcecream(): String{
        return `${this.customIcecream.makeIcecream()} ${this.addCookieDough()}`;
    }

    /**
     * addCookieDough operation
     *
     * @return
     */
    private addCookieDough(): String {
        return " -> add CookieDough";
    }
}