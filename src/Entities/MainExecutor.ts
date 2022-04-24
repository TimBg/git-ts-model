import { FoldersMap, TerminalCommand } from "../consts/CommonTypes";
import { THIS_FOLDER_IS_ALREADY_A_GIT_REPOSITORY } from "../consts/ErrorKinds";

import { isGitFolder } from "../Utils/TypeCheckers";
import { CommandsExecutor } from "./CommandsExecutor";
import { Folder } from "./Folders/Folder";

import { VirtualFolder } from "./Folders/VirtualFolder";
import { Git } from "./Git";

type PrefixToExecutor = {
    [nameOfModule: string]: CommandsExecutor
};

export class MainExecutor {
    private rootFolder: Folder;
    private executorsConfig: PrefixToExecutor;

    constructor(rootFolder: Folder, executorsConfig: PrefixToExecutor) {
        this.rootFolder = rootFolder;
        this.executorsConfig = executorsConfig;
    }

   // private commandToAction: CommandToAction

   /*  downloadRepoToCurrentFolder(remoteRepo: VirtualFolder): void {
        if(isGitFolder(this.currentFolder)) {
           throw new Error(THIS_FOLDER_IS_ALREADY_A_GIT_REPOSITORY)
        } else {
            Git.clone(remoteRepo, this.currentFolder);
        }
    }  */

    //using command choose the correct method-executor in the MapHash or another structure and trigger it 
    execute(command: TerminalCommand): void {} 
}