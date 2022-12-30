

/**
 * client menu order requests, they can order multiple noodle, sushi, tempura items
 *
 * @version 1.0.0
 * @Author Bridget Wu
 */
 export class OrderMenuRequest {
    protected noodleItems: String[] = [];
    protected sushiItems: String[] = [];
    protected tempuraItems: String[] = [];

    /**
     * get all noodle orders
     *
     * @return
     */
    public getNoodleItems(): String[]{
        return this.noodleItems;
    }
    
    /**
     * add a noodle order
     *
     * @param item
     */
    public addNoodleItem(item: String): void {
        this.noodleItems.push(item);
    }
    /**
     * get all sushi orders
     *
     * @return
     */
     public getSushiItems(): String[]{
        return this.sushiItems;
    }
    
    /**
     * add a sushi order
     *
     * @param item
     */
    public addSushiItem(item: String): void {
        this.sushiItems.push(item);
    }
    /**
     * get all tempura orders
     *
     * @return
     */
    public getTempuraItems(): String[]{
        return this.tempuraItems;
    }
        
    /**
     * add a tempura order
     *
     * @param item
     */
    public addTempuraItem(item: String): void {
        this.tempuraItems.push(item);
    }
}
