const express = require("express");
const cors = require("cors");
const { tasksRouter } = require("./routers/tasksRouter");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// register tasks router
app.use("/", tasksRouter);

app.listen(3001, () => console.log("Server Running..."));
