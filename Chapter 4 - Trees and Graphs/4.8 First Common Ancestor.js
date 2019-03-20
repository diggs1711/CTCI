import { TreeNode } from './Utils/TreeNode.js';
let common = null;

function commonAncestor(root, n1, n2) {
    if(root == null) return null;
    if(root == n1) return common = n1
    if(root == n2) return common = n2

    if(inSubtree(root.left, n1, n2) && inSubtree(root.right, n1, n2)){
        common = root;
    }

    if(commonAncestor(root.left,n1, n2) && commonAncestor(root.right, n1, n2)) {
        return root;
    }

    return root;
}

function inSubtree(root, n1, n2) {
    if(root == null) return false;
    if(root == n1 || root == n2) return true;

    return inSubtree(root.left, n1, n2) || inSubtree(root.right, n1, n2)
}

let root = new TreeNode(1);
let n2 = root.addLeft(2)
let n3 = root.addRight(3)

let n4 = n2.addLeft(4)
let n5 = n2.addRight(5)

let n6 = n3.addRight(6)

let n7 = n5.addLeft(7)

commonAncestor(root, n6, n2)
console.log(common)

