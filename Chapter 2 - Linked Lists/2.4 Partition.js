import Node from './Util/LinkedNode.js'

/**
 * 
 * @param {Node} head 
 * @param {BigInteger} partitionValue 
 * @description O(n^2) solution 
 */

function Partition(head, partitionValue) {
    let n = head
    let p1 = head,
        p2 = head

    while (p1 != null) {
        if (p1.data >= partitionValue) {
            while (p2 != null) {
                if (p2.data < partitionValue) {
                    const temp = p1.data
                    p1.data = p2.data
                    p2.data = temp
                }
                p2 = p2.next
            }
        }
        p1 = p1.next
        p2 = p1
    }
}

/**
 * 
 * @param {Node} node 
 * @param {Int} partitionValue 
 * @description O(N) solution, linked lists offer O(N) insertion and deletion 
 * so creating a new linked list from the current nodes operates in linear time
 */
function PartitionOptimal(node, partitionValue) {
    let head = node,
        tail = node;

    while (node != null) {
        let next = node.next
        if (node.data < partitionValue) {
            node.next = head
            head = node
        } else {
            tail.next = node
            tail = node
        }
        node = next
    }
    tail.next = null
    return head
}

let head = new Node(3)
head.appendToTail(5)
head.appendToTail(8)
head.appendToTail(5)
head.appendToTail(10)
head.appendToTail(2)
head.appendToTail(1)

// Partition(head, 5)
head = PartitionOptimal(head, 5)
console.log(head)