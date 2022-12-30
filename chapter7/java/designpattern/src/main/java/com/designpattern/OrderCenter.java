package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * OrderCenter is the command Invoker class, which is a simple class that encapsulates the Command
 * and passes the request to the command object to process it.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
public class OrderCenter {
    private List<Command> commands = new ArrayList<>();

    /**
     * OrderCenter(Command) have a reference to Command interface to invoke the command.
     */
    public OrderCenter(List<Command> commands) {

        this.commands.addAll(commands);
    }

    /**
     * delegate action to command execute method.
     */
    public void execute() {
        for (Command command : commands) {
            command.execute();
        }
    }
}
