import { CommandsExecutor } from "../Entities/CommandsExecutor";
import { SystemFolder } from "../Entities/Folders/SystemFolder";

export type PathToFile = string;

export type TerminalCommand = string;

export type FoldersMap = {
    [key: PathToFile]: SystemFolder; 
} 

export type PrefixToCommandsExecutor = {
    [prefix: string]: CommandsExecutor
}

export type GitCommandToMethod = {
    [key: string]: Function
}