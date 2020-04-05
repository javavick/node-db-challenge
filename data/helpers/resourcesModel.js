const db = require("../dbConfig.js");

// GET all resources
const find = () => {
  return db("resources");
};

// GET resource by ID
const findById = (id) => {
  return db("resources")
    .where({ id })
    .first();
};

// GET resource by Project ID
const findByProjectId = (id) => {
  return db("resources")
    .join(
      "projects_resources",
      "resources.id",
      "projects_resources.resource_id"
    )
    .where("projects_resources.project_id", id)
    .select("resources.id", "resources.name", "resources.description");
};

// POST new resource
const add = async (resource) => {
  const [id] = await db("resources").insert(resource);

  return findById(id);
};

module.exports = { find, findById, findByProjectId, add };
