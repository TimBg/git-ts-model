import { Git } from './Git';
import { SystemFolder } from './Folders/SystemFolder';
import { isGitFolder } from '../Utils/TypeCheckers';
import { VirtualFolder } from './Folders/VirtualFolder';

import { THIS_FOLDER_IS_ALREADY_A_GIT_REPOSITORY } from '../consts/ErrorTypes';

type PathToFile = string;
type FoldersMap = {
    [key: PathToFile]: SystemFolder; 
} 

export class Enviroment {
    private folders: FoldersMap;
    private currentPath: PathToFile;
    private currentFolder: SystemFolder;

    constructor() {
        this.currentPath = 'C:\\';
        this.currentFolder = new SystemFolder();
        this.folders = {
            [this.currentPath]: this.currentFolder
        };
    }

    changeCurrentFolder(newCurrentFolder: SystemFolder): void {
        this.currentFolder = newCurrentFolder;
    }

    changePath(newPath: PathToFile): void {
        this.currentPath = newPath;
        this.changeCurrentFolder(this.folders[newPath])
    }

    addRepoToCurrentFolder(remoteRepo: VirtualFolder): void {
        if(isGitFolder(this.currentFolder)) {
           throw new Error(THIS_FOLDER_IS_ALREADY_A_GIT_REPOSITORY)
        } else {
            Git.clone(remoteRepo, this.currentFolder);
        }
    }
}