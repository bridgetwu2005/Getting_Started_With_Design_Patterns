import { Kitchen } from "./Kitchen";

/**
 * Sushi Kitchen will prepare and make Sushi per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export  class SushiKitchen implements Kitchen {
    /**
     * make sushi food based on customer order items
     *
     * @param items
     */
    public  makeFood(items: String[]): void{
        if (items && items.length>0) {
            console.log("make Sushi:[");
            for (let item of items) {
                console.log(" {" + item + "} ");
            }
            console.log("]");
        }

    }
}
