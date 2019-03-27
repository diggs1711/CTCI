/**
 * keeps track of min value using a second stack
 *
 */
class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * removes first element from stack
     */
    pop() {
        let popped = this.stack.shift()
        if (popped == this.getMin()) {
            this.minStack.shift()
        }
        return popped;
    }

    /**
     *
     * @param {number} item add new item to stack
     */
    push(item) {
        if (item < this.getMin()) {
            this.minStack.unshift(item)
        }
        this.stack.unshift(item)
    }

    /**
     * checks top element
     */
    peek() {
        if(this.stack.length == 0) return null
        return this.stack[0];
    }

    /**
     * returns min value
     */
    getMin() {
        if(this.minStack.length == 0) return Infinity
        return this.minStack[0];
    }
}

let stack = new Stack()
stack.push(10)
stack.push(50)
stack.push(4)
stack.push(6)
stack.push(1)
stack.push(7)

console.log(stack.getMin())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.getMin())