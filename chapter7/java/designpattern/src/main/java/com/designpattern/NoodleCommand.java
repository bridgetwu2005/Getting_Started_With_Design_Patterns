package com.designpattern;

/**
 * The concrete commands Noodle which will call NoodleKitchen to make food.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class NoodleCommand implements Command {

    private NoodleKitchen kitchen;

    private OrderMenuRequest request;

    /**
     * @param kitchen - NoodleKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    public NoodleCommand(NoodleKitchen kitchen, OrderMenuRequest request) {
        this.kitchen = kitchen;
        this.request = request;
    }

    /**
     * execute Noodle order per customer order menu request, Noodle kitchen will  make food
     */
    @Override
    public void execute() {
        kitchen.makeFood(request.getNoodleItems());
    }
}
