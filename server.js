const express = require("express");
const server = express();

const ProjectsRouter = require("./routes/projectsRouter.js");
const ResourcesRouter = require("./routes/resourcesRouter.js");
const TasksRouter = require("./routes/tasksRouter.js");

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;
