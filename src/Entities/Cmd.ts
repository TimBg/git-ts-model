import { PrefixToCommandsExecutor, TerminalCommand } from "../consts/CommonTypes";
import { CommandsExecutor } from "./CommandsExecutor";

export class Cmd {
    private prefixToCommandsExecutor: PrefixToCommandsExecutor;

    constructor(config: PrefixToCommandsExecutor) {
        this.prefixToCommandsExecutor = config;
    }

    private chooseExecutor(command: TerminalCommand) {
        const prefix = command.split(' ')[0].trim();
        return this.prefixToCommandsExecutor[prefix]; 
    }

    public addExecutor(prefix: string, executor: CommandsExecutor) {
        this.prefixToCommandsExecutor[prefix] = executor;
    }

    public execute(command: TerminalCommand) {
        this.chooseExecutor(command).execute(command);
    }

    normilizeCommand(command: TerminalCommand) {
        return command;
    }
}