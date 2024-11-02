const express=require('express')
const router=express.Router()
const movieController=require("../Controller/movieController")

router.post('/watchlist',movieController.addtoWatchList)
router.get('/watchlist',movieController.getWatchList)
router.delete('/watchlist/:id',movieController.deleteMovie)
router.put('/watchlist/:id',movieController.editMovie)

module.exports=router