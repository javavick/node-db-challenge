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
      "projects.name as project_name",
      "projects.description as project_description"
    );
};

// GET task by ID
const findById = (id) => {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .where("tasks.id", id)
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "projects.name as project_name",
      "projects.description as project_description"
    )
    .first();
};

// GET task by Project ID
const findByProjectId = (id) => {
  return db("tasks")
    .where("tasks.project_id", id)
    .select("tasks.id", "tasks.description", "tasks.notes", "tasks.completed");
};

// POST new task
const add = async (task) => {
  const [id] = await db("tasks").insert(task);

  return findById(id);
};

module.exports = { find, findById, findByProjectId, add };
