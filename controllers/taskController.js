const Task = require('../models/taskModel');

exports.list = (req, res) => {
  res.render('index', { tasks: Task.getAll() });
};

exports.add = (req, res) => {
  const { title, name, role } = req.body;
  if (!title || !name || !role) return res.redirect('/');
  Task.addOfficer(title, name, role);
  res.redirect('/');
};

exports.delete = (req, res) => {
  Task.delete(Number(req.params.id));
  res.redirect('/');
};

exports.editForm = (req, res) => {
  const task = Task.getById(Number(req.params.id));
  if (!task) return res.redirect('/');
  res.render('edit', { task });
};

exports.update = (req, res) => {
  const { title, name, role } = req.body;
  Task.update(Number(req.params.id), title, name, role);
  res.redirect('/');
}; 