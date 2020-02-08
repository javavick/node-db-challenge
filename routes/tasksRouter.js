const express = require("express");
const Tasks = require("../data/helpers/tasksModel.js");
const {
  validateDescription,
  validateProjectId
} = require("../middleware/middleware.js");
const router = express.Router();

// GET "/api/tasks"
router.get("/", (req, res) => {
  Tasks.find()
    .then((task) => {
      const payload = task.map((item) => {
        return { ...item, completed: item.completed === 0 ? false : true };
      });
      res.json(payload);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to get tasks." });
    });
});

// POST "/api/tasks"
router.post("/", validateDescription, validateProjectId, (req, res) => {
  Tasks.add(req.body)
    .then((task) => {
      const payload = {
        ...task,
        completed: task.completed === 0 ? false : true
      };

      res.status(201).json(payload);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add task." });
    });
});

module.exports = router;
