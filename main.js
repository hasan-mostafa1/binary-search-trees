import { prettyPrint } from "./prettyPrint.js";
import { Tree } from "./tree.js";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(testArray);
prettyPrint(tree.root);
// tree.insert(200);
// tree.insert(300);
tree.deleteItem(8);
tree.deleteItem(9);
prettyPrint(tree.root);
// tree.deleteItem(5);
// prettyPrint(tree.root);
