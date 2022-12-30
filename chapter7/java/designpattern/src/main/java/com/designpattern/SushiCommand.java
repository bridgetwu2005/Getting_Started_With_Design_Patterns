package com.designpattern;

/**
 * The concrete Sushi commands to call SushiKitchen makeFood.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class SushiCommand implements Command {

    private SushiKitchen kitchen;

    private OrderMenuRequest request;

    /**
     * @param kitchen - SushiKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    public SushiCommand(SushiKitchen kitchen, OrderMenuRequest request) {
        this.kitchen = kitchen;
        this.request = request;
    }

    /**
     * execute Sushi order per customer order menu request, Sushi kitchen will  make food
     */
    @Override
    public void execute() {
        kitchen.makeFood(request.getSushiItems());
    }
}
