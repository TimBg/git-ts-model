import { DirectoryChanger } from "../Entities/DirectoryChanger"
import { Git } from "../Entities/Git"

export const prefixToInterpreter = {
    'cd': new DirectoryChanger(),
    'git': new Git()
} 