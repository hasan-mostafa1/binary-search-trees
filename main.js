import { prettyPrint } from "./prettyPrint.js";
import { Tree } from "./tree.js";

function randomArray(length = 10) {
  let arr = [];
  while (length >= 0) {
    arr.push(Math.floor(Math.random() * 100));
    length--;
  }
  return arr;
}
const testArray = randomArray();
const tree = new Tree(testArray);
prettyPrint(tree.root);

console.log("is balanced:", tree.isBalanced());

console.log("level order traversal...");
tree.levelOrderForEach((node) => {
  console.log(node.data, "");
});

console.log("preorder traversal...");
tree.preOrderForEach((node) => {
  console.log(node.data, "");
});

console.log("postorder traversal...");
tree.postOrderForEach((node) => {
  console.log(node.data, "");
});

console.log("inorder traversal...");
tree.inOrderForEach((node) => {
  console.log(node.data, "");
});

// Unbalance the tree
console.log("Unbalancing the tree by adding 300, 200, and 700..");
tree.insert(300);
tree.insert(200);
tree.insert(700);

prettyPrint(tree.root);
console.log("is balanced:", tree.isBalanced());

//Balance the tree
console.log("rebalancing the tree..");
tree.rebalance();
prettyPrint(tree.root);
console.log("is balanced:", tree.isBalanced());

console.log("level order traversal...");
tree.levelOrderForEach((node) => {
  console.log(node.data, "");
});

console.log("preorder traversal...");
tree.preOrderForEach((node) => {
  console.log(node.data, "");
});

console.log("postorder traversal...");
tree.postOrderForEach((node) => {
  console.log(node.data, "");
});

console.log("inorder traversal...");
tree.inOrderForEach((node) => {
  console.log(node.data, "");
});
