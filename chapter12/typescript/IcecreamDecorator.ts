import { Icecream } from "./Icecream";

/**
 * Decorator class implements the component interface - Icecream and it has a HAS-A relationship with the component interface.
 * The component variable should be accessible to the child decorator classes, so we will make this variable protected.
 *
 * @Author Bridget Wu
 */
 export abstract class IcecreamDecorator implements Icecream {
    //can be access by child decorator classes
    protected customIcecream: Icecream;

    /**
     * passing Icecream in constructor and can make custom Icecream
     *
     * @param customIcecream
     */
    public constructor(customIcecream: Icecream) {
        this.customIcecream = customIcecream;
    }

    /**
     * make make Icecream
     *
     * @return
     */
    public makeIcecream(): String {
        return this.customIcecream.makeIcecream();
    }
}
