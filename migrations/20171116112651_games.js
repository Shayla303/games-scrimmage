
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games',function (table){
    table.increments('id')
    table.string('name')
    table.varchar('platform')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
}
