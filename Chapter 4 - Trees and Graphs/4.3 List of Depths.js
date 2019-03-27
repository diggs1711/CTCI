import Queue from './Utils/Queue.js'

function createListOfNodes(root) {
    const listOfDepths = new Map()
    let currentLevel = []
    let depth = 0

    if (root != null) {
        currentLevel.push(root)
    }

    while (currentLevel.length > 0) {
        listOfDepths.set(depth, currentLevel)
        let parents = currentLevel.splice()
        currentLevel = []
        depth++
        
        for (const parent of parents) {
            if (parent.left != null) {
                currentLevel.push(parent.left)
            }
            if (parent.right != null) {
                currentLevel.push(parent.right)
            }
        }
    }
    return listOfDepths
}

function createListOfNodesR(root, depth = 0, listOfNodes = {}) {
    if (root === null) return

    if (!listOfNodes[depth]) {
        listOfNodes[depth] = []
    }

    listOfNodes[depth].push(root.name)

    createListOfNodesR(root.left, depth + 1, listOfNodes)
    createListOfNodesR(root.right, depth + 1, listOfNodes)
}