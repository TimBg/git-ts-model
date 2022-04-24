export abstract class Folder {
    protected childFolders: Folder[];
    protected childFiles: string[];
    protected nameOfFolder: string;
    
    constructor(nameOfFolder: string) {
        this.nameOfFolder = nameOfFolder;
        this.childFolders = [];    
        this.childFiles = [];
    }

    public addFolder(newFolder: Folder) {
        this.childFolders.push(newFolder);
    }

    public addFile(newFile: string) {
        this.childFiles.push(newFile);
    }
}