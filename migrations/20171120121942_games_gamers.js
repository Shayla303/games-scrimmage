
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('games_gamers', function (table){
    table.increments('id');
    table.integer('gamers_id').references('gamers_id');
    table.integer('games_id').references('games_id');
     })
   ])
 };

 exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games_gamers')
 };
