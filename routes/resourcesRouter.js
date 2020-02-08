const express = require("express");
const Resources = require("../data/helpers/resourcesModel.js");
const { validateName } = require("../middleware/middleware.js");
const router = express.Router();

// GET "/api/resources"
router.get("/", (req, res) => {
  Resources.find()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to get resources." });
    });
});

// POST "/api/resources"
router.post("/", validateName, (req, res) => {
  Resources.add(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add resource." });
    });
});

module.exports = router;
