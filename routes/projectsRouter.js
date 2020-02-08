const express = require("express");

const Projects = require("../data/helpers/projectsModel.js");
const Tasks = require("../data/helpers/tasksModel.js");
const Resources = require("../data/helpers/resourcesModel.js");
const { validateName } = require("../middleware/middleware.js");

const router = express.Router();

// GET "/api/projects"
router.get("/", (req, res) => {
  Projects.find()
    .then((project) => {
      const payload = project.map((item) => {
        return { ...item, completed: item.completed === 0 ? false : true };
      });

      res.json(payload);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to get projects" });
    });
});

// GET "/api/projects/:id"
router.get("/:id", (req, res) => {
  Tasks.findByProjectId(req.params.id)
    .then((task) => {
      req.tasks = task.map((item) => {
        return { ...item, completed: item.completed === 0 ? false : true };
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to find tasks." });
    });

  Resources.findByProjectId(req.params.id)
    .then((resource) => {
      req.resources = resource;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to find resources." });
    });

  Projects.findById(req.params.id)
    .then((project) => {
      if (!project) {
        res
          .status(404)
          .json({ message: "There is no project that matches the URL." });
      } else {
        const payload = {
          ...project,
          completed: project.completed === 0 ? false : true,
          tasks: [...req.tasks],
          resources: [...req.resources]
        };

        res.json(payload);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to find projects." });
    });
});

// POST "/api/projects"
router.post("/", validateName, (req, res) => {
  Projects.add(req.body)
    .then((project) => {
      const payload = {
        ...project,
        completed: project.completed === 0 ? false : true
      };

      res.status(201).json(payload);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add project" });
    });
});

module.exports = router;
