/**
 * Pizza TypeScript class
 *
 * @Author: Bridget
 */
 export class Pizza {

    private name: string;
    private size: string = "";
    private toppings: Array<string> = [];
    private sauces: Array<string> = [];

    constructor (name: string){
        this.name = name
    }

    public getSize(): string {
        return this.size;
    }

    public setSize(size: string): void {
        this.size = size;
    }

    public getToppings(): string[] {
        return this.toppings;
    }

    public addToppings(topping: string): void {
        this.toppings.push(topping);
    }

    public getSauces(): string[] {
        return this.sauces;
    }
    public addSauces(sauce: string): void {
        this.sauces.push(sauce);
    }

    public getName(): string {
        return this.name;
    }

    public toString() : string {
        return `Pizza{" +
        "name='" + ${this.name} + '\'' +
        ", size='" + ${this.size}  + '\'' +
        ", toppings=" + ${this.toppings} +
        ", sauces=" + ${this.sauces} +
        '}'`;
    }
}
