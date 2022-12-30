import { Icecream } from "./Icecream";

/**
 * Base Component Implementation. We will add different type of Icecreams based on Vanilla Icecream.
 * <p>
 *
 * @Author Bridget Wu
 */
 export class VanillaIcecream implements Icecream {
    /**
     * make Vanilla Icecream
     *
     * @return
     */
    public makeIcecream(): String {
        return "Make Vanilla Icecream";
    }
}