import { Kitchen } from "./Kitchen";

/**
 * Noodle Kitchen will prepare and cook Noodle per customer order menu
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export  class NoodleKitchen implements Kitchen {
    /**
     * make noodle food based on customer order items
     *
     * @param items
     */
    public  makeFood(items: String[]): void{
        if (items && items.length>0) {
            console.log("cook Noodle:[");
            for (let item of items) {
                console.log(" {" + item + "} ");
            }
            console.log("]");
        }

    }
}
