import Graph from "./Utils/Graph.js"
import Queue from "./Utils/Queue.js";

const graph = new Graph(true)
graph.addNode(0)
graph.addNode(1)
graph.addNode(2)
graph.addNode(3)
graph.addNode(4)
graph.addNode(5)
graph.addNode(6)

graph.addEdge(0, 1)
graph.addEdge(1, 2)
graph.addEdge(2, 0)
graph.addEdge(2, 3)
graph.addEdge(3, 2)
graph.addEdge(4, 6)
graph.addEdge(5, 4)
graph.addEdge(6, 5)

function isRouteDFS(source, dest) {
    if (source === dest) return true;
    const sourceNode = graph.getNode(source)
    const destNode = graph.getNode(dest)
    const visited = new Map()
    let found = false;

    function explore(node) {
        if (visited.has(node.key)) return

        if (node.key == destNode.key) {
            found = true;
            return;
        }

        visited.set(node.key, true)

        for (const child of node.children) {
            if (!visited.has(child.key)) {
                explore(child)
            }
        }
    }
    explore(sourceNode)
    return found;
}

function isRouteBFS(source, dest) {
    const sourceNode = graph.getNode(source)
    const destNode = graph.getNode(dest)
    const queue = new Queue()
    const visited = new Map()

    if (sourceNode.key === destNode.key) return true

    queue.enqueue(sourceNode)

    while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()
        if (currentNode.key === destNode.key) return true
        visited.set(currentNode.key, true)

        for (const child of currentNode.children) {
            if (!visited.has(child.key)) {
                queue.enqueue(child)
            }
        }
    }
    return false
}

console.log(graph.print())
console.log(isRouteDFS(1, 3)) //true
console.log(isRouteDFS(1, 4)) // false

console.log(isRouteBFS(1, 3)) //true
console.log(isRouteBFS(1, 4)) // false