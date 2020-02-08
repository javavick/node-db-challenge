const db = require("../dbConfig.js");

// GET all projects
const find = () => {
  return db("projects");
};

// GET project by ID
const findById = (id) => {
  return db("projects")
    .join("tasks", "projects.id", "tasks.project_id")
    .join("projects_resources", "projects.id", "projects_resources.project_id")
    .join("resources", "projects_resources.resource_id", "resources.id")
    .select(
      "project.id",
      "project.name",
      "project.description",
      "project.completed",
      "tasks.id as task_id",
      "tasks.description as task_description",
      "tasks.notes as task_notes",
      "tasks.completed as task_completed",
      "resources.id as resource_id",
      "resources.name as resource_name",
      "resources.description as resource_description"
    )
    .where({ id })
    .first();
};

// POST new project
const add = async (project) => {
  const [id] = await db("projects").insert(project);

  return findById(id);
};

module.exports = { find, findById, add };
