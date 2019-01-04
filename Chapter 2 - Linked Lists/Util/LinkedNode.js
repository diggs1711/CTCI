/**
 * Creates a linked list
 */

export default class Node {
    constructor(data = null) {
        this.data = data
        this.next = null
    }

    appendToTail(d) {
        const newTail = new Node(d)
        let n = this;
        while (n.next != null) {
            n = n.next
        }
        n.next = newTail
        return newTail
    }

    deleteNode(head, d) {
        const n = head

        if (n.data == d) {
            return n.next
        }

        while (n.next != null) {
            if (n.next.data == d) {
                n.next = n.next.next
                return head
            }
            n = n.next
        }
        return head
    }
}