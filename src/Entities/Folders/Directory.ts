import { VirtualFolder } from './VirtualFolder';

export class Directory extends VirtualFolder {
    constructor() {
        super();
    }

    getFolders() {
        return this.folders;
    }
}