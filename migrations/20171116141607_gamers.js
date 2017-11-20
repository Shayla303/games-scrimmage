
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gamers', function (table) {
    table.increments('id')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gamers')
};
