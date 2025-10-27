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
}

export { Tree };
