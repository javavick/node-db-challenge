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

// POST new resource
const add = async (resource) => {
  const [id] = await db("resources").insert(resource);

  return findById(id);
};

module.exports = { find, findById, add };
