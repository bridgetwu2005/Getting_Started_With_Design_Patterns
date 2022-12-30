import { Kitchen } from "./Kitchen";

/**
 * Tempura Kitchen will prepare and make Tempura per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export  class TempuraKitchen implements Kitchen {
    /**
     * make tempura food based on customer order items
     *
     * @param items
     */
    public  makeFood(items: String[]): void{
        if (items && items.length>0) {
            console.log("make Tempura:[");
            for (let item of items) {
                console.log(" {" + item + "} ");
            }
            console.log("]");
        }

    }
}
