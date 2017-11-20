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


// //this sends the link of the game to the onegamer page
// router.get('/:id', function(req, res, next) {
//   const id = req.params.id;
//   queries.getOneGamer(id)
//   .then((gamerData)=>{
//     res.render('onegamer', {gamerData:gamerData})
//   })
// })


// // updates the game and we need to update the DB
// router.put('/update/:id', function(req,res,next) {
//   const gameId = req.params.id;
//   queries.updateGame(gameId, req.body)
//   .then(updatedGame =>{
//     res.redirect('/games')
//   })
// })
//
// router.delete('/delete/:id', function(req,res,next) {
//   const deleteId = req.params.id;
//   queries.deleteGame(deleteId)
//   .then(deletedGame => {
//     res.redirect('/games')
//   })
// })
//

module.exports = router;
