import { SystemFolder } from "./Folders/SystemFolder";
import { VirtualFolder } from "./Folders/VirtualFolder";

export class Git {
    static instance: Git;

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
}
