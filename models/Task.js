class Task {
  #id;
  #title;

  constructor(title) {
    if (this.constructor === Task) {
      throw new Error("Abstract class 'Task' cannot be instantiated directly.");
    }
    this.#id = Date.now();
    this.#title = title;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  // Abstract method
  getDetails() {
    throw new Error("Method 'getDetails()' must be implemented.");
  }
}

module.exports = Task; 