"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCenter = void 0;
/**
 * OrderCenter is the command Invoker class, which is a simple class that encapsulates the Command
 * and passes the request to the command object to process it.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
class OrderCenter {
    ;
    /**
     * OrderCenter(Command) have a reference to Command interface to invoke the command.
     */
    constructor(commands) {
        this.commands = [];
        for (let command of commands) {
            this.commands.push(command);
        }
    }
    /**
        * delegate action to command execute method.
        */
    execute() {
        for (let command of this.commands) {
            command.execute();
        }
    }
}
exports.OrderCenter = OrderCenter;
