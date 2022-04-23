import { CommandsExecutor } from "./CommandsExecutor";

export class DirectoryChanger extends CommandsExecutor {
    constructor() {
        super();
    }

    //add path argument and change it
    public execute(command: string): void {
        const atomsOfCommand = command.split(' ').map(String.prototype.trim);
    }
}