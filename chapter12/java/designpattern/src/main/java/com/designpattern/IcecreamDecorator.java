package com.designpattern;

/**
 * Decorator class implements the component interface - Icecream and it has a HAS-A relationship with the component interface.
 * The component variable should be accessible to the child decorator classes, so we will make this variable protected.
 *
 * @Author Bridget Wu
 */
public abstract class IcecreamDecorator implements Icecream {
    //can be access by child decorator classes
    protected Icecream customIcecream;

    /**
     * passing Icecream in constructor and can make custom Icecream
     *
     * @param customIcecream
     */
    public IcecreamDecorator(Icecream customIcecream) {
        this.customIcecream = customIcecream;
    }

    /**
     * The base decorator simply delegates all work (makeIcecream) to the wrapped component.
     * Extra behaviors can be added in concrete decorators.
     *
     * @return
     */
    public String makeIcecream() {
        return customIcecream.makeIcecream();
    }
}

