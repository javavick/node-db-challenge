const express = require("express");
const Projects = require("../data/helpers/projectsModel.js");
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
