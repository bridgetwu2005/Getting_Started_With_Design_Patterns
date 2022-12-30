package com.designpattern;

/**
 * CookieDoughDecorator is Concrete Decorators
 * CookieDoughDecorator Extending the base decorator (IcecreamDecorator) functionality and modifying the component behavior accordingly.
 *
 * @Author Bridget Wu
 */
public class CookieDoughDecorator extends IcecreamDecorator {
    /**
     * extends parent base decorator  - IcecreamDecorator
     *
     * @param customIcecream
     */
    public CookieDoughDecorator(Icecream customIcecream) {
        super(customIcecream);
    }

    /**
     * modifying the makeIcecream component behavior accordingly by addCookieDough
     *
     * @return
     */
    public String makeIcecream() {
        return customIcecream.makeIcecream() + addCookieDough();
    }

    /**
     * addCookieDough operation
     *
     * @return
     */
    private String addCookieDough() {
        return " -> add CookieDough";
    }
}