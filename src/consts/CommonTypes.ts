import { SystemFolder } from "../Entities/Folders/SystemFolder";

export type PathToFile = string;

export type TerminalCommand = string;

export type FoldersMap = {
    [key: PathToFile]: SystemFolder; 
} 