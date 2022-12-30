
/**
 * Pizza request sending from client request
 *
 * @Author Bridget Wu
 */
 export class PizzaRequest {


    private sauces: String[] = [];

    private toppings: String[] = [];

    public getSauces() : String[]{
        return this.sauces;
    }

    /**
     * add a sauce
     *
     * @param sauce
     */
    public addSauce(sauce: String): void {
        this.sauces.push(sauce);
    }

    public getToppings(): String[] {
        return this.toppings;
    }

    /**
     * add a topping
     *
     * @param topping
     */
    public addTopping(topping: String): void {
        this.toppings.push(topping);
    }
}
