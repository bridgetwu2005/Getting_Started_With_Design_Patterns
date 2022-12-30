import { Icecream } from "./Icecream";
import { IcecreamDecorator } from "./IcecreamDecorator";

/**
 * ChocolateDecorator is Concrete Decorators
 * ChocolateDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
 export class ChocolateDecorator extends IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    public constructor(customIcecream: Icecream) {
        super(customIcecream);
    }

    /**
     * modifying the makeIcecream component behavior accordingly by addChocolate
     *
     * @return
     */
    public makeIcecream(): String {

        return `${this.customIcecream.makeIcecream()} ${this.addChocolate()}`;
    }

    /**
     * addChocolate operation
     *
     * @return
     */
    private addChocolate(): String {
        return " -> add chocolate";
    }
}