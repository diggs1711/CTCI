import Queue from "./Queue.js";

export default class Graph {

    constructor(directed = false) {
        this.nodes = []
        this.edges = []
        this.isDirected = directed
    }

    createNode(key) {
        const children = [];
        return {
            key,
            children,
            addChild(node) {
                children.push(node)
            }
        }
    }

    getNode(key) {
        return this.nodes.find(node => node.key === key)
    }

    addNode(key) {
        this.nodes.push(this.createNode(key))
    }

    addEdge(nodeKey1, nodeKey2) {
        const node1 = this.getNode(nodeKey1)
        const node2 = this.getNode(nodeKey2)

        node1.addChild(node2)

        if (!this.isDirected) {
            node2.addChild(node1)
        }

        this.edges.push(`${nodeKey1} - ${nodeKey2}`)
    }

    print() {
        return this.nodes
            .map(({
                children,
                key
            }) => {
                let result = `${key}`

                if (children.length) {
                    result += ` => ${children
                    .map(node => node.key)
                .join(' ')}`
                }
                return result;
            }).join('\n')
    }

    DepthFirst(root, visitFn) {
        const startingNode = this.getNode(root)
        const visited = new Map()

        function explore(node) {
            if (visited.has(node.key)) return

            visitFn(node)
            visited.set(node.key, true)

            node.children.forEach(child => {
                explore(child)
            });
        }

        explore(startingNode)
    }

    BreadthFirst(root, visitFn) {
        const startingNode = this.getNode(root)
        const visited = new Map()
        const q = new Queue()

        q.enqueue(root)

        while (!q.isEmpty()) {
            const currentNode = q.dequeue()
            visitFn(currentNode)

            for (const node of currentNode.children) {
                if (!visited.has(node.key)) {
                    visited.set(node.key, true)
                    q.enqueue(node)
                }
            }
        }

    }
}