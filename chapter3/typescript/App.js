"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheesePizzaBuilder_1 = require("./CheesePizzaBuilder");
const PepperoniPizzaBuilder_1 = require("./PepperoniPizzaBuilder");
//initialized PepperoniPizzaBuilder
let pepperoniPizzaBuilder = new PepperoniPizzaBuilder_1.PepperoniPizzaBuilder();
//create Pepperoni Pizza with size, topping and sauce
pepperoniPizzaBuilder.createPizza()
    .buildSize("LARGE")
    .addTopping("Mushrooms")
    .addTopping("Onions")
    .addSauce("Buffalo Sauce");
//get Pepperoni Pizza
let pepperoniPizza = pepperoniPizzaBuilder.getPizza();
//print Pepperoni Pizza informatioon
console.log(pepperoniPizza);
//initialized CheesePizzaBuilder
let cheesePizzaBuilder = new CheesePizzaBuilder_1.CheesePizzaBuilder();
//create Chees Pizza with size, topping and sauce
cheesePizzaBuilder.createPizza()
    .buildSize("SMALL")
    .addTopping("Green pepper")
    .addTopping("Tomato")
    .addSauce("Barbecue Sauce");
//get Cheese Pizza
let cheesePizza = cheesePizzaBuilder.getPizza();
//print Cheese Pizza informatioon
console.log(cheesePizza);
