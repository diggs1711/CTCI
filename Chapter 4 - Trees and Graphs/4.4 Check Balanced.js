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

function isBalanced(root) {
    if (root == null) return

    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)

    return Math.abs(leftHeight - rightHeight) < 2
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
console.log(height)