const express = require("express");
const {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/todos.controller");
const router = express.Router();

router.post("/addTask", addTask);

router.get("/getTask", getTasks);

router.put("/updateTask/:id", updateTask);

router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
