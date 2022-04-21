import { GitFolder } from "../Entities/Folders/GitFolder";
import { SystemFolder } from "../Entities/Folders/SystemFolder";

export const isGitFolder = (folder: SystemFolder): folder is GitFolder => {
    return (folder as GitFolder).directory !== undefined;
}