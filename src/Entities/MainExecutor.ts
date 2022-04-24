import { TerminalCommand } from "../consts/CommonTypes";

import { CommandsExecutor } from "./CommandsExecutor";
import { Folder } from "./Folders/Folder";

type PrefixToExecutor = {
    [nameOfModule: string]: CommandsExecutor
};

export class MainExecutor {
    private rootFolder: Folder;
    private prefixToExecutor: PrefixToExecutor;

    constructor(rootFolder: Folder, prefixToExecutor: PrefixToExecutor) {
        this.rootFolder = rootFolder;
        this.prefixToExecutor = prefixToExecutor;
    }

    //using command choose the correct method-executor in the MapHash or another structure and trigger it 
    execute(command: TerminalCommand): void {
        const prefix: string = command.split(' ')[0];
        const microExecutor: CommandsExecutor = this.prefixToExecutor[prefix];
        microExecutor.execute(command);
    } 
}