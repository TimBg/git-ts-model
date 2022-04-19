import { removeElementFromArray } from './../Utils/Arrays';

export class Commit {
    private id: string;
    private descendants: Commit[];

    constructor() {
      this.id = Commit.generateId();
      this.descendants = [];
    }

    addDescendant(commit: Commit): void {
        this.descendants.push(commit);
    }

    removeDescendant(commit: Commit): void {
        removeElementFromArray(this.descendants, commit);
    }

    static generateId(): string {
        return 'a'.repeat(40);
    }
}
