exports.seed = async function(knex) {
  await knex("tasks").insert([
    { id: 1, description: "Kill Starscream", completed: true, project_id: 1 },
    { id: 2, description: "Kill Megatron", completed: false, project_id: 1 },
    { id: 3, description: "???", completed: false, project_id: 1 },
    { id: 4, description: "Profit", completed: false, project_id: 1 },
    { id: 5, description: "Revive Primus", completed: false, project_id: 2 },
    {
      id: 6,
      description: "Bring some cookies with us from Earth",
      notes: "They are delicious!",
      completed: false,
      project_id: 2
    },
    {
      id: 7,
      description: "Lure him out by yelling out that Megatron is dead",
      completed: false,
      project_id: 3
    },
    {
      id: 8,
      description: "Kill Starscream again",
      completed: false,
      project_id: 3
    }
  ]);
};
