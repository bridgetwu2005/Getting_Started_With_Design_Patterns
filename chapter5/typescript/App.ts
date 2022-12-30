/**
 * Chapter 5: Template Design Pattern
 * In the Template design pattern,  an abstract class defines the steps as a template to execute an algorithm in a template method without implementing some steps of the algorithm.
 * The abstract may contain the default implementation of some algorithm steps that might be common for all or some subclasses.
 * The abstract class's subclasses can override the algorithm's specific steps as per the requirement of the subclasses.
 * Still, the algorithm execution sequence will follow steps defined by an abstract base class.
 * A template pattern is a behavior design pattern.
 *
 * @Author Bridget Wu
 */

import { CheesePizza } from "./CheesePizza";
import { PepperoniPizza } from "./PepperoniPizza";
import { PizzaRequest } from "./PizzaRequest";

//order PepperoniPizza
let pepperoniPizza = new PepperoniPizza();
let repperoniPizzaRequest = new PizzaRequest();
pepperoniPizza.order(repperoniPizzaRequest);
console.log();
//order CheesePizza with additional topping and sauce
let cheesePizza = new CheesePizza();
let cheesePizzaRequest = new PizzaRequest();
cheesePizzaRequest.addTopping("Mushroom");
cheesePizzaRequest.addTopping("Sausage");
cheesePizzaRequest.addSauce("BBQ Sauce");
cheesePizza.order(cheesePizzaRequest);