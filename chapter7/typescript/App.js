"use strict";
/**
 * Chapter 7: Command Design Pattern
 * The command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.
 * Create invoker class which is a reference to the Command interface to invoke the command.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const NoodleCommand_1 = require("./NoodleCommand");
const NoodleKitchen_1 = require("./NoodleKitchen");
const OrderCenter_1 = require("./OrderCenter");
const OrderMenuRequest_1 = require("./OrderMenuRequest");
const SushiCommand_1 = require("./SushiCommand");
const SushiKitchen_1 = require("./SushiKitchen");
const TempuraCommand_1 = require("./TempuraCommand");
const TempuraKitchen_1 = require("./TempuraKitchen");
let orderCommands = [];
//initial OrderMenuRequest
let orderRequest = new OrderMenuRequest_1.OrderMenuRequest();
// order Noodle items
orderRequest.addNoodleItem("Tonkotsu Shoyu Ramen");
orderRequest.addNoodleItem("Sanuki udon");
//create NoodleKitchen
let noodleKitchen = new NoodleKitchen_1.NoodleKitchen();
// add Noodle order to NoodleCommand
let noodleOrderCommand = new NoodleCommand_1.NoodleCommand(noodleKitchen, orderRequest);
// add NoodleCommand to orderCommands list
orderCommands.push(noodleOrderCommand);
//create SushiKitchen
let sushiKitchen = new SushiKitchen_1.SushiKitchen();
// order Sushi items
orderRequest.addSushiItem("Rainbow Roll");
orderRequest.addSushiItem("Avocado & Salmon Sushi Roll");
orderRequest.addSushiItem("Tuna Sushi Roll (Tekka Maki)");
let sushiOrderCommand = new SushiCommand_1.SushiCommand(sushiKitchen, orderRequest);
// add Sushi to orderCommands list
orderCommands.push(sushiOrderCommand);
//create TempuraKitchen
let tempuraKitchen = new TempuraKitchen_1.TempuraKitchen();
// order Tempura items
orderRequest.addTempuraItem("Ebi, shrimp/prawn");
orderRequest.addTempuraItem("Kakiage");
let tempuraOrderCommand = new TempuraCommand_1.TempuraCommand(tempuraKitchen, orderRequest);
// add Tempura to orderCommands list
orderCommands.push(tempuraOrderCommand);
// send all order command to OrderCenter to execute order commands
let orderCenter = new OrderCenter_1.OrderCenter(orderCommands);
orderCenter.execute();
