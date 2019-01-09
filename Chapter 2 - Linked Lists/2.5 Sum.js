import Node from './Util/LinkedNode.js'

/**
 * 
 * @param {Node} h1 first digit to added
 * @param {Node} h2 second digit to be added
 * @param {int} carry carry from previous addition
 * @description recursive function. runs in o(n) time and o(n) space
 * 
 */

function sumRecur(h1, h2, carry) {
    if (h1 == null && h2 === null && carry == null) {
        return
    }

    let value = carry
    if (h1 != null) value += h1.data
    if (h2 != null) value += h2.data
    let remainder = value % 10
    let result = new Node(remainder)

    if (h1 != null || h2 != null) {
        let more = sum(h1 != null ? h1.next : null,
            h2 != null ? h2.next : null,
            value >= 10 ? 1 : 0)
        result.next = more
    }
    return result
}

/**
 * 
 * @param {Node} h1 
 * @param {Node} h2 
 * @description iterative function. runs in O(1) space and linear time
 */
function sum(h1, h2) {
    let carry = 0,
        previous = null,
        result = null,
        resultHead = null

    while (h1 != null || h2 != null) {
        let value = carry
        if (h1 != null) value += h1.data
        if (h2 != null) value += h2.data

        let remainder = value % 10
        carry = value > 10 ? 1 : 0

        result = new Node(remainder)
        if (!previous) {
            previous = result
            resultHead = result
        } else {
            previous.next = result
            previous = result
        }

        if (h1) h1 = h1.next
        if (h2) h2 = h2.next
    }

    if (carry) {
        result.next = new Node(carry)
    }
    return resultHead
}

/**
 * @param {Node} h1 
 * @param {Node} h2 
 * @description sum two linked lists when least significant bit and the end
 */

function sumB(h1, h2) {

}

const head1 = new Node(7)
head1.appendToTail(1)
head1.appendToTail(6)

const head2 = new Node(5)
head2.appendToTail(9)

//console.log(sumRecur(head1, head2, 0))
console.log(sum(head1, head2))