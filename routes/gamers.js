var express = require('express');
var router = express.Router();
var queries = require('../db/queries')


router.get('/', function(req,res,next) {
  queries.getGamers()
  .then((gamerData) =>{
        res.render('gamers', {gamerData:gamerData })
      })
  })

//post requests to listen for a path to set as my action in the form adds a gamer to the DB
router.post('/', function(req,res,next) {
  var newGamer = req.body
  console.log(newGamer)
  queries.addGamer(newGamer)
  .then((gamer)=>{
    res.redirect('/gamers')
   })
})


//this sends the link of the game to the onegamer page, takes the app.use also into account
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  queries.getOneGamer(id)
  .then((gamerData)=>{
  queries.getOneGamersGames(gamerData[0].name)
  .then((gamerGamesData)=>{
    console.log(gamerGamesData)
    res.render('onegamer', {gamerData:gamerData[0],gamerGamesData})
  })
  })
})


// delete the game from the page //
router.delete('/:gamers_id/remove/:games_id', function(req,res,next) {
  const deleteId = req.params.gamers_id;
  const deleteName = req.params.games_id;
  queries.deleteGame(deleteId,deleteName)
  .then(deletedGame => {
    res.redirect('/gamers/'+deleteId)
  })
})


// updates the game and we need to update the DB
// router.post('/:id', function(req,res,next) {
// })
module.exports = router;
