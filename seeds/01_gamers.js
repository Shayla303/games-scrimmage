
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gamers').del()
    .then(function () {
      // Inserts seed entries
      return knex('gamers').insert([
        {name: 'Kaleo Richard'},
        {name: 'Shayla Richard'},
        {name: 'Peaches Richard'}
      ]);
    });
};
