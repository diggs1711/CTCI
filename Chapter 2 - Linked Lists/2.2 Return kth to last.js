/**
 * 
 * @param {Node} head 
 * @param {Num} target kth to last element
 */
import Node from './Util/LinkedNode.js'

function returnKthElement(head, target) {
    let pointer = head;

    for (let index = 0; index < target - 1; index++) {
        if (pointer.next != null) {
            pointer = pointer.next
        } else {
            return "out of bounds"
        }
    }

    while (pointer.next != null) {
        pointer = pointer.next
        head = head.next
    }

    return head;
}

const head = new Node(1)
head.appendToTail(2)
head.appendToTail(3)
head.appendToTail(4)
head.appendToTail(5)
head.appendToTail(6)

console.log(returnKthElement(head, 2))