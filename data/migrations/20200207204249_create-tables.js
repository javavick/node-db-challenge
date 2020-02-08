exports.up = async function(knex) {
  await knex.schema.createTable("projects", (tbl) => {
    tbl.increments("id");
    tbl.string("name", 128).notNullable();
    tbl.text("description");
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
  });

  await knex.schema.createTable("resources", (tbl) => {
    tbl.increments("id");
    tbl.string("name", 128).notNullable();
    tbl.text("description");
  });

  await knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("id");
    tbl.text("description").notNullable();
    tbl.text("notes");
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");
  });

  await knex.schema.createTable("projects_resources", (tbl) => {
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources");
    tbl.primary(["project_id", "resource_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
