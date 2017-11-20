const db = require('./knex')
// tells database how to render data to the frontend

function getGames() {
  return db('games').select();
}

function addGame(newGame) {
  return db('games').insert(newGame)
}

function getOneGame(id) {
  return db('games').select().where('games.id', id)
}

function updateGame(id,reqbody) {
  return db('games').select().where('games.id', id)
  .update(reqbody)
}

function deleteGame(id) {
  return db('games').select().where('games.id', id)
  .delete()
}

//GAMERS QUERIES//

function getGamers() {
  return db('gamers').select();
}

function addGamer(newGame) {
  return db('gamers').insert(newGame)
}

function getOneGamer() {
  return db('gamers').select().where('gamers.id', id)
}

module.exports = {
  getGames,
  addGame,
  getOneGame,
  updateGame,
  deleteGame,
  getGamers,
  addGamer,
}
