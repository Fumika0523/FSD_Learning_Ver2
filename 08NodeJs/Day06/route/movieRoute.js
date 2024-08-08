const Movie = require('../model/movieModel')
const express=require('express')
const router = express.Router()

//GET
router.get('/movies',async(req,res)=>{
    const getAllMovies=await Movie.find({})
    res.send(getAllMovies)
})

//GET_ID
router.get('/movies/:id',async(req,res)=>{
    const getMovie = await Movie.findById(req.params.id)
    if(getMovie){
        res.send(getMovie)
    }
    res.send({message:"Movie Not Found"})
})

//POST
router.post('/addmovies',async(req,res)=>{
    const moviesData = new Movie (req.body)
    moviesData.save()
    res.send(moviesData)
})

//UPDATE
router.put('/movies/:id',async(req,res)=>{
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(updateMovie){
    return res.send(updateMovie)
    }
    res.send({message:"MOvie Not Found, hence unable to update"})
})

//DELETE
router.delete('/movies/:id',async(req,res)=>{
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
    if(deletedMovie){
    res.send({
        deleteMovie:deletedMovie,
        message:"deleted Successfully"
    })
}
res.send({message:"Movie Does NOT Exisits, Hopefully its Deleted, please re-check."})
})

module.exports=router
