package com.designpattern;

/**
 * RaspberriesDecorator is Concrete Decorators
 * RaspberriesDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
public class RaspberriesDecorator extends IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    public RaspberriesDecorator(Icecream customIcecream) {
        super(customIcecream);
    }

    /**
     * modifying the makeIcecream component behavior accordingly by addRaspberries
     *
     * @return
     */
    public String makeIcecream() {
        return customIcecream.makeIcecream() + addRaspberries();
    }

    /**
     * addRaspberries operation
     *
     * @return
     */
    private String addRaspberries() {
        return " -> add Freeze-Dried raspberries";
    }
}