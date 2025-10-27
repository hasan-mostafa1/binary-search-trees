import { Node } from "./node.js";

class Tree {
  #root;

  constructor(dataArray) {
    dataArray.sort((a, b) => a - b);
    this.#root = this.#buildTree([...new Set(dataArray)]);
  }

  get root() {
    return this.#root;
  }

  #buildTree(dataArray) {
    const start = 0;
    const end = dataArray.length - 1;

    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);

    const root = new Node(dataArray[mid]);

    root.left = this.#buildTree(dataArray.slice(start, mid));
    root.right = this.#buildTree(dataArray.slice(mid + 1, end + 1));

    return root;
  }

  insert(value) {
    const node = new Node(value);
    let currentNode = this.#root;
    while (true) {
      if (node.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (node.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        break;
      }
    }
  }

  deleteItem(value) {
    let currentNode = this.#root;
    let targetNode = null;
    while (true) {
      if (this.#root.data === value) {
        targetNode = this.#root;
      } else if (currentNode.left?.data === value) {
        targetNode = currentNode.left;
      } else if (currentNode.right?.data === value) {
        targetNode = currentNode.right;
      } else {
        currentNode =
          value > currentNode.data ? currentNode.right : currentNode.left;
      }

      if (targetNode) {
        let replacementNode = null;
        // The target node has two children
        if (targetNode.left && targetNode.right) {
          let inorderSuccessor = targetNode.right;
          while (inorderSuccessor.left) {
            inorderSuccessor = inorderSuccessor.left;
          }
          replacementNode = inorderSuccessor;
          this.deleteItem(inorderSuccessor.data);
          replacementNode.left = targetNode.left;
          replacementNode.right = targetNode.right;
        } else {
          // The target node is a leaf or has only one child
          replacementNode = targetNode.left ?? targetNode.right;
        }
        if (targetNode === this.#root) {
          this.#root = replacementNode;
        } else {
          if (targetNode === currentNode.left) {
            currentNode.left = replacementNode;
          } else {
            currentNode.right = replacementNode;
          }
        }
        break;
      }
    }
  }

  find(value) {
    let currentNode = this.#root;
    while (currentNode) {
      if (value > currentNode.data) {
        currentNode = currentNode.right;
      } else if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        return currentNode;
      }
    }
    return null;
  }
}

export { Tree };
