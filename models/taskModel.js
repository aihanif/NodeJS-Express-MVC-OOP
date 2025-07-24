const Task = require('./Task');
const TaskOfficer = require('./TaskOfficer');

let tasks = [];

module.exports = {
  getAll: () => tasks,
  getById: (id) => tasks.find(task => task.id === id),
  add: (title) => {
    const newTask = new TaskOfficer(title, 'Unknown', 'Unknown');
    tasks.push(newTask);
    return newTask;
  },
  addOfficer: (title, name, role) => {
    const newTaskOfficer = new TaskOfficer(title, name, role);
    tasks.push(newTaskOfficer);
    return newTaskOfficer;
  },
  update: (id, title, name, role) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
      if (title) task.title = title;
      if (name) task.name = name;
      if (role) task.role = role;
    }
    return task;
  },
  delete: (id) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length < initialLength;
  }
}; 