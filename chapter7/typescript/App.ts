
/**
 * Chapter 7: Command Design Pattern
 * The command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.
 * Create invoker class which is a reference to the Command interface to invoke the command.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */

import { NoodleCommand } from "./NoodleCommand";
import { NoodleKitchen } from "./NoodleKitchen";
import { OrderCenter } from "./OrderCenter";
import { OrderMenuRequest } from "./OrderMenuRequest";
import { SushiCommand } from "./SushiCommand";
import { SushiKitchen } from "./SushiKitchen";
import { TempuraCommand } from "./TempuraCommand";
import { TempuraKitchen } from "./TempuraKitchen";


let orderCommands = []
//initial OrderMenuRequest
let  orderRequest = new OrderMenuRequest();
// order Noodle items
orderRequest.addNoodleItem("Tonkotsu Shoyu Ramen");
orderRequest.addNoodleItem("Sanuki udon");

//create NoodleKitchen
let noodleKitchen = new NoodleKitchen();
// add Noodle order to NoodleCommand
let noodleOrderCommand = new NoodleCommand(noodleKitchen, orderRequest);
// add NoodleCommand to orderCommands list
orderCommands.push(noodleOrderCommand);

//create SushiKitchen
let sushiKitchen = new SushiKitchen();
// order Sushi items
orderRequest.addSushiItem("Rainbow Roll");
orderRequest.addSushiItem("Avocado & Salmon Sushi Roll");
orderRequest.addSushiItem("Tuna Sushi Roll (Tekka Maki)");
let sushiOrderCommand = new SushiCommand(sushiKitchen, orderRequest);
// add Sushi to orderCommands list
orderCommands.push(sushiOrderCommand);

//create TempuraKitchen
let tempuraKitchen = new TempuraKitchen();
// order Tempura items
orderRequest.addTempuraItem("Ebi, shrimp/prawn");
orderRequest.addTempuraItem("Kakiage");
let tempuraOrderCommand = new TempuraCommand(tempuraKitchen, orderRequest);
// add Tempura to orderCommands list
orderCommands.push(tempuraOrderCommand);

// send all order command to OrderCenter to execute order commands
let orderCenter = new OrderCenter(orderCommands);
orderCenter.execute();


