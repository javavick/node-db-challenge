const db = require("../dbConfig.js");

// GET all tasks
const find = () => {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "projects.name",
      "projects.description"
    );
};

// GET task by ID
const findById = (id) => {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .where({ id })
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "projects.name",
      "projects.description"
    )
    .first();
};

// POST new task
const add = async (task) => {
  const [id] = await db("tasks").insert(task);

  return findById(id);
};

module.exports = { find, findById, add };
