exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      id: 1,
      name: "Matrix of Leadership",
      description: "Also known as the Creation Matrix"
    },
    { id: 2, name: "AllSpark" },
    { id: 3, name: "Teletraan I" },
    { id: 4, name: "Ark" }
  ]);
};
