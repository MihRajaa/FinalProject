const Todos = require("../models/Todos");

exports.addTask = async (req, res) => {
  const { todo } = req.body;
  try {
    const newTask = new Todos({ todo });
    await newTask.save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Todos.find().populate("User");
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Todos.findByIdAndUpdate(
      {
        id: req.params.id,
      },
      req.body
    ).populate("User");
    res.send(task);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Todos.findByIdAndDelete({
      id: req.params.id,
    }).populate("User");
    res.send(task);
  } catch (error) {
    res.send(error);
  }
};
