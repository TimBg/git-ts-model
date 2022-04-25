import { Git } from "../Entities/Git"

export const prefixToExecutor = {
    'git': new Git()
} 

export const gitCommandToMethod = {
    'clone': Git.clone,
    'branch': Git.branch,
    'commit': Git.commit,
    'add': Git.add,
    'checkout': Git.checkout,
    'status': Git.status,
    'pull': Git.pull,
    'push': Git.push
}