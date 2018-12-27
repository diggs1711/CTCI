import TreeNode from "./Utils/TreeNode.js"
import TreeTraversals from "./Utils/TreeTraversals.js";
import Graph from "./Utils/Graph.js"
import GraphSearch from "./Utils/GraphSearch.js";

const graph = new Graph()
graph.addNode(0, 1)
graph.addNode(1, 2)
graph.addNode(2, 0)
graph.addNode(2, 3)
graph.addNode(3, 2)
graph.addNode(4, 6)
graph.addNode(5, 4)
graph.addNode(6, 5)

//graph.DepthFirst(0, console.log)
graph.breadthFirst(0, console.log)
/*
const n = new TreeNode(3)
const n1 = n.addLeft(2)
const n2 = n.addRight(5)
const n3 = n1.addLeft(1)
const n4 = n1.addRight(2)
const n5 = n2.addLeft(4)
const n6 = n2.addRight(6)

const traverse = new TreeTraversals()
traverse.IN_ORDER(n, console.log)
//traverse.PRE_ORDER(n, console.log)
//traverse.POST_ORDER(n, console.log)
*/