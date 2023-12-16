const express = require("express");
const cors = require("cors");
const { ToDoTasks } = require("./constants");
// For using brower space in server side
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/seed", async (req, res) => {
  const tasks = ToDoTasks;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  res.send({ data: "tasks added successfully" }).status(201);
});
app.get("/tasks", async (req, res) => {
  const tasks = localStorage.getItem("tasks");
  res.send({ data: JSON.parse(tasks) }).status(200);
});
app.patch("/updateTasks", async (req, res) => {
  const tasks = req.body.tasks;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  res.send({ data: JSON.parse(tasks) }).status(200);
});

app.listen(3001, () => console.log("Server Running..."));
