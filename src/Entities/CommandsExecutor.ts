import { TerminalCommand } from "../consts/CommonTypes";

export abstract class CommandsExecutor {
    public abstract execute(command: TerminalCommand): void;
}