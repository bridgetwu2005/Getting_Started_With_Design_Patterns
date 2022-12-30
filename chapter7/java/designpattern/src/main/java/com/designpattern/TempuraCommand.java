package com.designpattern;

/**
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class TempuraCommand implements Command {

    private TempuraKitchen kitchen;

    private OrderMenuRequest request;

    /**
     * @param kitchen - TempuraKitchen
     * @param request - OrderMenuRequest is customer order menu request with multiple order items
     */
    public TempuraCommand(TempuraKitchen kitchen, OrderMenuRequest request) {
        this.kitchen = kitchen;
        this.request = request;
    }

    /**
     * execute Tempura order per customer order menu request, Tempura kitchen will  make food
     */
    @Override
    public void execute() {
        kitchen.makeFood(request.getTempuraItems());
    }
}