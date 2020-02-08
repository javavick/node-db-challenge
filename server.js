const express = require("express");
const server = express();

const ProjectsRouter = require("./routes/projectsRouter.js");

server.use(express.json());
server.use("/api/projects", ProjectsRouter);

module.exports = server;
