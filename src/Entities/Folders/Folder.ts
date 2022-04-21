export abstract class Folder {
    protected folders: Folder[];
    
    constructor() {
        this.folders = [];    
    }

    addFolder(newFolder: Folder) {
        this.folders.push(newFolder);
    }
}