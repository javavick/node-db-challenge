const Projects = require("../data/helpers/projectsModel.js");

const validateName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Missing required name field." });
  } else {
    next();
  }
};

module.exports = { validateName };
