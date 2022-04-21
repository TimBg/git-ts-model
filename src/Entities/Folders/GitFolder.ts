import { Directory } from "./Directory";
import { Index } from "./Index";
import { Repository } from "./Repository";
import { Commit } from "../Commit";
import { SystemFolder } from "./SystemFolder";

export class GitFolder extends SystemFolder {
    private _directory: Directory;
    private index: Index;
    private repository: Repository;
    private currentBranch: Commit;
    private motherBranch: Commit; 

    constructor() {
        super();
        this._directory = new Directory();
        this.index = new Index();
        this.repository = new Repository();
        this.folders = this._directory.getFolders();
        this.motherBranch = this.currentBranch = new Commit();
    }

    public get directory() {
        return this._directory;
    }
}