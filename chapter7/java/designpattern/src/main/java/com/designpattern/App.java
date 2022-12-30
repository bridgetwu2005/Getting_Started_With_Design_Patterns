package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * Chapter 7: Command Design Pattern
 * The command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.
 * Create invoker class which is a reference to the Command interface to invoke the command.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class App {

    public static void main(String[] args) {

        List<Command> orderCommands = new ArrayList<>();
        //initial OrderMenuRequest
        OrderMenuRequest orderRequest = new OrderMenuRequest();
        // order Noodle items
        orderRequest.addNoodleItem("Tonkotsu Shoyu Ramen");
        orderRequest.addNoodleItem("Sanuki udon");
        //create NoodleKitchen
        NoodleKitchen noodleKitchen = new NoodleKitchen();
        // add Noodle order to NoodleCommand
        Command noodleOrderCommand = new NoodleCommand(noodleKitchen, orderRequest);
        // add NoodleCommand to orderCommands list
        orderCommands.add(noodleOrderCommand);

        //create SushiKitchen
        SushiKitchen sushiKitchen = new SushiKitchen();
        // order Sushi items
        orderRequest.addSushiItem("Rainbow Roll");
        orderRequest.addSushiItem("Avocado & Salmon Sushi Roll");
        orderRequest.addSushiItem("Tuna Sushi Roll (Tekka Maki)");
        Command sushiOrderCommand = new SushiCommand(sushiKitchen, orderRequest);
        // add Sushi to orderCommands list
        orderCommands.add(sushiOrderCommand);

        //create TempuraKitchen
        TempuraKitchen tempuraKitchen = new TempuraKitchen();
        // order Tempura items
        orderRequest.addTempuraItem("Ebi, shrimp/prawn");
        orderRequest.addTempuraItem("Kakiage");
        Command tempuraOrderCommand = new TempuraCommand(tempuraKitchen, orderRequest);
        // add Tempura to orderCommands list
        orderCommands.add(tempuraOrderCommand);

        // send all order command to OrderCenter to execute order commands
        OrderCenter orderCenter = new OrderCenter(orderCommands);
        orderCenter.execute();
    }
}
