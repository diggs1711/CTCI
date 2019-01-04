/**
 * 
 * @param {Treenode} root 
 * @desc each node has access to its parent
 * @returns {successor node} 
 */
import TreeNode from './Utils/TreeNode.js'

function successor(root) {
    if (root.left == null) {
        return root;
    }
    return successor(root.left)
}

function findSuccessor(tree, target) {
    if (target.right != null) {
        return successor(target.right)
    }
    return null;
}

const tree = createBST();

console.log(findSuccessor(tree, 4))

function createBST() {
    const root = new TreeNode(6)
    const a = root.addLeft(4)
    const b = root.addRight(8)
    const c = a.addRight(5)
    const d = a.addLeft(2)
    const e = d.addLeft(1)
    const f = b.addLeft(7)
    const g = b.addRight(10)
    const h = g.addLeft(9)

    return root;
}