/**
 * 
 * @param {Node} node node to be deleted
 * will not work when trying to delete last node
 */

import Node from './Util/LinkedNode.js'

function deleteMiddleNode(node) {
    if (n == null || n.next == null)
        return false

    let n = node

    n.data = n.next.data
    n.next = n.next.next
}

const head = new Node(1)
head.appendToTail(2)
head.appendToTail(3)
const target = head.appendToTail(4)
head.appendToTail(5)
head.appendToTail(6)

console.log(head)
deleteMiddleNode(target)