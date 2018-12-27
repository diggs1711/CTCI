import Queue from "./Queue.js";

export default class Graph {
    constructor() {
        this.nodes = {}
    }

    addNode(parent, child) {
        if (this.nodes[parent]) {
            this.nodes[parent].push(child)
            return this.nodes;
        }
        this.nodes[parent] = []
        this.nodes[parent].push(child)
    }

    DepthFirst(root, visitFn) {
        visitFn(root)
        this.nodes[root]["visited"] = true

        for (const node of this.nodes[root]) {
            if (!this.nodes[node]["visited"]) {
                this.DepthFirst(node, visitFn)
            }
        }
    }

    breadthFirst(root, visitFn) {
        const q = new Queue()
        this.nodes[root]["visited"] = true
        q.enqueue(root)

        while (!q.isEmpty()) {
            const r = q.dequeue()
            visitFn(r)
            for (const node of this.nodes[r]) {
                if (!this.nodes[node]["visited"]) {
                    this.nodes[node]["visited"] = true
                    q.enqueue(node)
                }
            }
        }

    }
}