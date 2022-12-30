import { Command } from "./Command";

/**
 * OrderCenter is the command Invoker class, which is a simple class that encapsulates the Command
 * and passes the request to the command object to process it.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export class OrderCenter {

    private commands: Command[] = [];;

    /**
     * OrderCenter(Command) have a reference to Command interface to invoke the command.
     */
    public constructor(commands: Command[]) {
        for(let command of commands) {
            this.commands.push(command)
        }
    }
 /**
     * delegate action to command execute method.
     */
    public execute(): void {
        for(let command of this.commands) {
            command.execute()
        }
    }
}
