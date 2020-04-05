exports.seed = async function(knex) {
  await knex("projects").insert([
    { id: 1, name: "Defeat the Decepticons" },
    { id: 2, name: "Fix Cybertron" },
    {
      id: 3,
      name: "Find the ghost of Starscream",
      description: "So we can kill him again."
    }
  ]);
};
