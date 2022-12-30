package com.designpattern;

/**
 * ChocolateDecorator is Concrete Decorators
 * ChocolateDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
public class ChocolateDecorator extends IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    public ChocolateDecorator(Icecream customIcecream) {
        super(customIcecream);
    }

    /**
     * modifying the makeIcecream component behavior accordingly by addChocolate
     *
     * @return
     */
    public String makeIcecream() {

        return customIcecream.makeIcecream() + addChocolate();
    }

    /**
     * addChocolate operation
     *
     * @return
     */
    private String addChocolate() {
        return " -> add chocolate";
    }
}