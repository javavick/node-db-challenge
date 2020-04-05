const db = require("../dbConfig.js");

// GET all projects
const find = () => {
  return db("projects");
};

// GET project by ID
const findById = (id) => {
  return db("projects")
    .where("projects.id", id)
    .first();
};

// POST new project
const add = async (project) => {
  const [id] = await db("projects").insert(project);

  return findById(id);
};

module.exports = { find, findById, add };
