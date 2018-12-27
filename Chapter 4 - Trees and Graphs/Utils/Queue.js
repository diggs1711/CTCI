export default class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.unshift(item)
    }

    dequeue() {
        return this.items.pop()
    }

    get length() {
        return this.items.length
    }

    isEmpty() {
        return this.length <= 0
    }
}