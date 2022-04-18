import { generateCommitId } from './../Utils/Factories';
import { removeElementFromArray } from './../Utils/Arrays';

class Commit {
    private id: string;
    private descendants: Commit[];

    constructor() {
      this.id = generateCommitId();
      this.descendants = [];
    }

    addDescendant(commit: Commit): void {
        this.descendants.push(commit);
    }

    removeDescendant(commit: Commit): void {
        removeElementFromArray(this.descendants, commit);
    }
}
