import { TerminalCommand } from "../consts/CommonTypes";

export abstract class CommandsExecutor {
    abstract execute(command: TerminalCommand): void;
}