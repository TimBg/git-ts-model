import { Folder } from "./Folder";
import { Directory } from "./Directory";
import { Index } from "./Index";
import { Repository } from "./Repository";
import { Commit } from "./Commit";

export class Git {
    private directory: Directory;
    private index: Index;
    private repository: Repository;
    private currentBranch: Commit;
    private motherBranch: Commit;  

    constructor() {
        this.directory = new Directory();
        this.index = new Index();
        this.repository = new Repository();
        this.motherBranch = this.currentBranch = new Commit();
    }

    branch() {}

    checkout() {}

    status() {}

    add() {}

    commit() {}

    pull() {}

    push() {}

    clone() {}
}
