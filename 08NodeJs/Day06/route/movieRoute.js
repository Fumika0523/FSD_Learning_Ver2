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
    res.send(getMovie)
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
    res.send(updateMovie)
})

//DELETE
router.delete('/movies/:id',async(req,res)=>{
    const deleteMovie = await Movie.findByIdAndDelete(req.params.id)
    res.send({
        deleteMovie:deleteMovie.Movie,
        message:"deleted Successfully"
    })
})

module.exports=router