const express = require("express");
const { ToDoTasks } = require("../constants");
const { filterTasksByTitle } = require("../utils/index");

// For using brower space in server side
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const tasksRouter = express.Router();

tasksRouter.post("/seed", async (req, res) => {
  localStorage.removeItem("tasks");
  const tasks = ToDoTasks;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  res.send({ data: "tasks added successfully" }).status(201);
});
tasksRouter.get("/tasks/:slug", async (req, res) => {
  const searchedText = req.params.slug;
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const filteredTasks = filterTasksByTitle(tasks, searchedText);
  res.send({ data: filteredTasks }).status(200);
});
tasksRouter.get("/tasks", async (req, res) => {
  const tasks = localStorage.getItem("tasks");
  res.send({ data: JSON.parse(tasks) }).status(200);
});
tasksRouter.patch("/updateTasks", async (req, res) => {
  const tasks = req.body;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  res.send({ data: tasks }).status(200);
});

module.exports = {
  tasksRouter,
};
