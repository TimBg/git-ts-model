import { Git } from "../Entities/Git"

export const prefixToExecutor = {
    'git': new Git()
} 