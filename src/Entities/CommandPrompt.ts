import { TerminalCommand } from "../consts/CommonTypes";
import { prefixToExecutor } from "../consts/Configs";
import { MainExecutor } from "./MainExecutor";

export class CommandPrompt {
    private currentPath: string; 
    private systemExecutor: MainExecutor;
    
    constructor(executor: MainExecutor) {
        this.currentPath = 'C:\\';
        this.systemExecutor = executor;
    }

    private riseAbove(): void {
        this.currentPath = this.currentPath.split('\\').slice(0, -1).join('\\');
    }

    private changeDirectory(command: TerminalCommand) {
        if(command === 'cd ..') {
            if(this.currentPath === 'C:\\') {
                console.log('This is the root folder');
            } else {
                this.riseAbove();
            } 
        } else {
            //...
        }
    }

    executeCommand(command: TerminalCommand): void {
        if(command.slice(0, 2) === 'cd') {
            this.changeDirectory(command);
        } else {
            this.systemExecutor.execute(command);
        }
    }
}