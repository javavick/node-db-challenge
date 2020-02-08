const express = require("express");
const server = express();

const ProjectsRouter = require("./routes/projectsRouter.js");
const ResourcesRouter = require("./routes/resourcesRouter.js");

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);

module.exports = server;
