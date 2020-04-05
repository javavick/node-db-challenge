const Projects = require("../data/helpers/projectsModel.js");

const validateName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Missing required name field." });
  } else {
    next();
  }
};

const validateDescription = (req, res, next) => {
  if (!req.body.description) {
    res.status(400).json({ message: "Missing required description field." });
  } else {
    next();
  }
};

const validateProjectId = (req, res, next) => {
  if (!req.body.project_id) {
    res.status(400).json({ message: "Missing required project_id field." });
  } else {
    Projects.findById(req.body.project_id)
      .then((project) => {
        if (!project) {
          res.status(404).json({
            message: "There is no project that matches the project_id."
          });
        } else {
          req.project = project;
          next();
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Failed to get the specified project." });
      });
  }
};

module.exports = { validateName, validateDescription, validateProjectId };
