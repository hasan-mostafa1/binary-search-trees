class Node {
  #data;
  #left;
  #right;

  constructor(data) {
    this.#data = data;
    this.#left = null;
    this.#right = null;
  }

  get data() {
    return this.#data;
  }

  set data(data) {
    this.#data = data;
  }

  get left() {
    return this.#left;
  }

  set left(left) {
    this.#left = left;
  }

  get right() {
    return this.#right;
  }

  set right(right) {
    this.#right = right;
  }
}
