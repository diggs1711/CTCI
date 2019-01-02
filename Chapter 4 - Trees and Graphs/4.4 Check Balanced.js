/**
 * 
 * @param {Treenode} root 
 * @description checks if it is a balanced binary tree 
 */
import TreeNode from './Utils/TreeNode.js'

function getHeight(root) {
    if (root == null) return 0
    return Math.max(getHeight(root.left), getHeight(root.root)) + 1
}


/**
 * Time complexity is O(N log(N))
 * @param {TreeNode} root 
 */
function isBalanced(root) {
    if (root == null) return true

    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false
    } else {
        return isBalanced(root.left) && isBalanced(root.right)
    }
}

/**
 * O(N) solution
 */

function checkHeight(root) {
    if (root == null) return -1

    const leftHeight = checkHeight(root.left)
    if (leftHeight === -Infinity) return -Infinity;

    const rightHeight = checkHeight(root.right)
    if (rightHeight == -Infinity) return -Infinity

    if (Math.abs(leftHeight - rightHeight) > 1) return -Infinity
    return Math.max(leftHeight, rightHeight) + 1;
}

const root = new TreeNode(6)
const a = root.addLeft(4)
const b = root.addRight(8)
const c = a.addRight(5)
const d = a.addLeft(2)
const e = d.addLeft(1)
const f = b.addLeft(7)
const g = b.addRight(10)
const h = g.addLeft(9)

const height = isBalanced(root)
console.log(checkHeight(root) > 0)
console.log(height)