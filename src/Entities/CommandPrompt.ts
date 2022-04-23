import { TerminalCommand } from "../consts/CommonTypes";
import { prefixToInterpreter } from "../consts/Configs";
import { Cmd } from "./Cmd";
import { SystemExecutor } from "./SystemExecutor";

export class CommandPrompt {
    private currentPath: string; 
    private interpreter: Cmd;
    private executorOfCommands: SystemExecutor;
    
    constructor(executorOfCommands: SystemExecutor) {
        this.currentPath = 'C:\\';
        this.interpreter = new Cmd(prefixToInterpreter);
        this.executorOfCommands = executorOfCommands;
    }

    // change current path in addition to executing git commands
    // add switch for choosing the correct interpreter - git or jumping between folders
    executeCommand(command: TerminalCommand): void {
        const normalizedCommand = this.interpreter.normilizeCommand(command);
        this.executorOfCommands.execute(normalizedCommand);
    }
}