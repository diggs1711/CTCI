import Node from './Util/LinkedNode.js'

/**
 * 
 * @param {Node} head head of the linked list
 */

function removeDuplicates(head) {
    let n = head
    const nodes = new Map()
    let previous = null

    while (n.next != null) {
        if (nodes.has(n.data)) {
            previous.next = n.next
        } else {
            nodes.set(n.data)
            previous = n
        }
        n = n.next
    }
    return head;
}

const head = new Node(2)
head.appendToTail(4)
head.appendToTail(7)
head.appendToTail(5)
head.appendToTail(6)
head.appendToTail(7)
head.appendToTail(7)
head.appendToTail(8)

console.log(head)
console.log(removeDuplicates(head))