/**
 * define product interface
 *
 * @Author Bridget Wu
 */
 export interface Product {
    /**
     * product price
     *
     * @return
     */
    getPrice(): number;

    /**
     * product ID
     *
     * @return
     */
    getId(): number;

    /**
     * product Name
     *
     * @return
     */
    getName(): String;
}