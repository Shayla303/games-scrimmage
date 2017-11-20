
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {name:"Donkey Kong", platform: "N64"},
        {name: "Legend of Zelda", platform:"NES"},
        {name: "Screeps", platform:"PC"}
      ]);
    });
};
