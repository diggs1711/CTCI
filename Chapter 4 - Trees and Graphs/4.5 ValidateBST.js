/**
 * BST - all left descendants <= n <= all right descendants
 * 
 */
import TreeNode from './Utils/TreeNode.js'

/**
 * 
 * @param {TreeNode} root root of the tree
 * @param {array} result resulting array from an in order traversal
 */

function validate(root, result = []) {
    if (root != null) {
        validate(root.left, result)
        result.push(root.getVal())
        validate(root.right, result)
    }
    return result
}

function validateBST(root) {
    if (root == null) return null

    const arr = validate(root)
    let index = 0;

    while (arr[index + 1]) {
        if (arr[index] > arr[index + 1]) {
            return false;
        }
        index++
    }
    return true;
}

function validateBSTRecur(root, min = null, max = null) {
    if (root == null) return true;

    if (min != null && root.val < min || max != null && root.val > max) {
        return false;
    }

    if (!validateBSTRecur(root.left, min, root.val) || !validateBSTRecur(root.right, root.val, max)) {
        return false;
    }
    return true;
}


console.log(validateBST(createBST())) //true
console.log(validateBST(createTreeNotSearch())) //false
console.log(validateBSTRecur(createBST())) //true 
console.log(validateBSTRecur(createTreeNotSearch())) //false

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

function createTreeNotSearch() {
    const root = new TreeNode(6)
    const a = root.addLeft(4)
    const b = root.addRight(8)
    const c = a.addRight(5)
    const d = a.addLeft(2)
    const e = d.addLeft(1)
    const i = e.addLeft(12)
    const f = b.addLeft(7)
    const g = b.addRight(10)
    const h = g.addLeft(9)

    return root
}