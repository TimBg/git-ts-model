import { CommandsExecutor } from "./CommandsExecutor";
import { SystemFolder } from "./Folders/SystemFolder";
import { VirtualFolder } from "./Folders/VirtualFolder";

export class Git extends CommandsExecutor {
    
    static branch() {}

    static checkout() {}

    static status() {}

    static add() {}

    static commit() {}

    static pull() {}

    static push() {}

    static clone(remoteRepository: VirtualFolder, currentFolder: SystemFolder) {
        currentFolder.addFolder(remoteRepository);
    }

    public execute(command: string): void {
        const baseOfCommand: string = command.split(' ')[1];
        //Git[baseOfCommand]();   
    }
}
