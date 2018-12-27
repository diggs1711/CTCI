export default function TreeTraversals() {
    return {
        IN_ORDER: function (root, visitFn) {
            if (root !== null) {
                this.IN_ORDER(root.left, visitFn)
                visitFn(root.val)
                this.IN_ORDER(root.right, visitFn)
            }
        },
        POST_ORDER: function (root, visitFn) {
            if (root !== null) {
                this.POST_ORDER(root.left, visitFn)
                this.POST_ORDER(root.right, visitFn)
                visitFn(root.val)
            }
        },
        PRE_ORDER: function (root, visitFn) {
            if (root !== null) {
                visitFn(root.val)
                this.PRE_ORDER(root.left, visitFn)
                this.PRE_ORDER(root.right, visitFn)
            }
        }
    }
}