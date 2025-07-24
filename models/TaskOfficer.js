const Task = require('./Task');

class TaskOfficer extends Task {
  #name;
  #role;

  constructor(title, name, role) {
    super(title);
    this.#name = name;
    this.#role = role;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }

  // Polymorphism: override getDetails
  getDetails() {
    return `Task: ${this.title}, Officer: ${this.#name}, Role: ${this.#role}`;
  }
}

module.exports = TaskOfficer; 