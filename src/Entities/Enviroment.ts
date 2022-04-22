import { SystemFolder } from './Folders/SystemFolder';

import { FoldersMap, PathToFile, TerminalCommand } from '../consts/CommonTypes';
import { CommandPrompt } from './CommandPrompt';
import { SystemExecutor } from './SystemExecutor';

export class Enviroment {
    private folders: FoldersMap;
    private currentFolder: SystemFolder;
    private commandPrompt: CommandPrompt;
    private executorOfCommands: SystemExecutor;

    constructor() {
        this.currentFolder = new SystemFolder();
        this.folders = {
            ['C:\\']: this.currentFolder
        };
        this.executorOfCommands = new SystemExecutor(this.folders);    
        this.commandPrompt = new CommandPrompt(this.executorOfCommands);
    }

    executeTerminalCommand(nameOfCommand: TerminalCommand) {
        this.commandPrompt.executeCommand(nameOfCommand);
    } 
}