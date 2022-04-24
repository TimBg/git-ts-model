import { TerminalCommand } from '../consts/CommonTypes';
import { prefixToExecutor } from '../consts/Configs';

import { CommandPrompt } from './CommandPrompt';
import { MainExecutor } from './MainExecutor';
import { Folder } from './Folders/Folder';
import { SystemFolder } from './Folders/SystemFolder';

export class Enviroment {
    private commandPrompt: CommandPrompt;
    private systemExecutor: MainExecutor;
    private rootFolder: Folder;

    constructor() {
        this.rootFolder = new SystemFolder('C');
        this.systemExecutor = new MainExecutor(this.rootFolder, prefixToExecutor);    
        this.commandPrompt = new CommandPrompt(this.systemExecutor);
    }

    executeTerminalCommand(nameOfCommand: TerminalCommand) {
        this.commandPrompt.executeCommand(nameOfCommand);
    } 
}