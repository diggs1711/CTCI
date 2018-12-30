import TreeNode from './Utils/TreeNode.js'

const elementsArray = [2, 4, 5, 7, 8, 11, 13, 45, 46, 54, 57]

function createBinarySearchMinHeightR(arr, start, end) {
    if (end < start) return

    const mid = Math.floor((start + end) / 2)
    const root = arr[mid]
    const rootNode = new TreeNode(root)

    rootNode.left = createBinarySearchMinHeightR(arr, start, mid - 1)
    rootNode.right = createBinarySearchMinHeightR(arr, mid + 1, end)

    return rootNode
}

function createBinarySearchMinHeight(elementsArray) {
    return createBinarySearchMinHeightR(elementsArray, 0, elementsArray.length - 1)
}

console.log(createBinarySearchMinHeight(elementsArray))