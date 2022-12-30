import { Icecream } from "./Icecream";
import { IcecreamDecorator } from "./IcecreamDecorator";

/**
 * RaspberriesDecorator is Concrete Decorators
 * RaspberriesDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
 export class RaspberriesDecorator extends IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    public constructor(customIcecream: Icecream) {
        super(customIcecream);
    }

    /**
     * modifying the makeIcecream component behavior accordingly by addRaspberries
     *
     * @return
     */
    public makeIcecream(): String {
        return `${this.customIcecream.makeIcecream()} ${this.addRaspberries()})`;
        
    }

    /**
     * addRaspberries operation
     *
     * @return
     */
    private addRaspberries() : String{
        return " -> add Freeze-Dried raspberries";
    }
}