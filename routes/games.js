var express = require('express');
var router = express.Router();
var queries = require('../db/queries')


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   console.log(req.body)
//    res.send('games');
// });


router.get('/', function(req,res,next) {
  queries.getGames()
  .then((gameCard) =>{
        res.render('games', {gameCard:gameCard })
      })
  })

//post requests to listen for a path to set as my action in the form(event listener) adds a game to the DB
router.post('/addGame', function(req,res,next) {
  var newGame = req.body
  queries.addGame(newGame)
  .then((gameInfo)=>{
    res.redirect('/games')
   })
})

//this sends the link of the game to the onegame page
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  queries.getOneGame(id)
  .then((gameCard) =>{
    res.render('onegame', {gameCard:gameCard})
  })
})

// updates the game and we need to update the DB
router.put('/update/:id', function(req,res,next) {
  const gameId = req.params.id;
  queries.updateGame(gameId, req.body)
  .then(updatedGame =>{
    res.redirect('/games')
  })
})

router.delete('/delete/:id', function(req,res,next) {
  const deleteId = req.params.id;
  queries.deleteGame(deleteId)
  .then(deletedGame => {
    res.redirect('/games')
  })
})


module.exports = router;
