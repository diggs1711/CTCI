export default class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }

    addLeft(val) {
        const newNode = new TreeNode(val)
        this.left = newNode
        return newNode
    }

    addRight(val) {
        const newNode = new TreeNode(val)
        this.right = newNode
        return newNode
    }

    getVal() {
        return this.val;
    }
}