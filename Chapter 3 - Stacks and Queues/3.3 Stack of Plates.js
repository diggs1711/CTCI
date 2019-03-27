class SetOfStacks {
    constructor(stackLimit) {
        this.set = []
        this.stackLimit = stackLimit
    }

    push(item) {
        if (this.set[this.set.length - 1] && this.set[this.set.length - 1].length < this.stackLimit) {
            this.set[this.set.length - 1].unshift(item)
        } else {
            // set has reached the limit
            let newStack = []
            newStack.unshift(item)
            this.set.push(newStack)
        }
    }

    pop() {
        if (this.set.length == 0) return null
        let popped = this.set[this.set.length - 1].shift()
        if (this.set[this.set.length - 1].length == 0) {
            this.set.length = this.set.length - 1
        }
        return popped;
    }

    peek() {
        if (this.set.length == 0) return null
        return this.set[this.set.length - 1][0]
    }
}

let stack = new SetOfStacks(2)
stack.push(3)
stack.push(5)
stack.push(4)
stack.push(7)
stack.push(1)
stack.push(9)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.push(11))
console.log(stack.push(13))
console.log(stack.pop())