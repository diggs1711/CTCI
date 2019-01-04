/**
 * Creates a linked list
 */

export default class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }

    appendToTail(d) {
        const newTail = new Node(d)
        let n = this;
        while (n.next != null) {
            n = n.next
        }
        n.next = newTail
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