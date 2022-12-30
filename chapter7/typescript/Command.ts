/**
 * The base command class defines the common interface for all concrete commands.
 *
 * @version 1.0.0
 * @Author Bridget
 * @license MIT
 */
 export interface Command {

    /**
     * The execution method is declared in the interface to force all
     * concrete commands to implement their own logic.
     */
    execute(): void;
}
