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

function getOneGamer(id) {
  return db('gamers').select().where('gamers.id', id)
}

function getOneGamersGames(name) {
  return db('gamers').select().where('gamers.name', name).join('games_gamers', 'gamers.id', 'gamers_id').join('games', 'games.id','games_id')
}


function deleteGame(deleteId,deleteName) {
  return db('games_gamers').select().where('gamers_id', deleteId).andWhere('games_id', deleteName).del()
}

module.exports = {
  getGames,
  addGame,
  getOneGame,
  updateGame,
  deleteGame,
  getGamers,
  addGamer,
  getOneGamer,
  getOneGamersGames,
  deleteGame
}
