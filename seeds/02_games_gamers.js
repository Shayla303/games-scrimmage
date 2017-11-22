
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games_gamers').del()
    .then(function () {
      // Inserts seed entries
      return knex('games_gamers').insert([
        {gamers_id: 1,
           games_id:1 },

        {gamers_id: 2,
          games_id:2 },

        {gamers_id: 3,
           games_id:3 }
      ]);
    });
};
