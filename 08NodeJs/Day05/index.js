const express = require('express')
const connection = require ('./db/connection')
const User = require ('./model/userModel')
const Task = require ('./model/taskModel')
const Movie = require ('./model/movieModel')
const Product = require ('./model/productModel')
const app = express()

app.use(express.json())

connection()

// const userData= new User ({
//     name:"Fumika00",
//     age:25,
//     phone_number:7041134429,
//     email:"FUMIKA00@gmail",
//     registered:true,
//     gender:"female"
// })
// userData.save()

// const moviesData = new Movie (
//     {
//         movieposter:"https://c4.wallpaperflare.com/wallpaper/920/355/589/cihiro-disney-spirited-away-entertainment-movies-hd-art-wallpaper-preview.jpg",
//         moviename: "Spirited Away",
//         rating: 8.6,
//         summary: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
//         cast: "Rumi Hiiragi,Miyu Irino,Mari Natsuki,Takashi Naito,Yasuko Sawaguchi,Tsunehiko ,Takehiko Ono,Bunta Sugawara",
//         trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
//         publishYear: 2001,
//         likeNum: 4000,
//         dislikeNum: 1200,
//         genres: "Fantasy, Adventure and Animation.",
//         category: "Feel-good, Imaginative"
//     })
// moviesData.save()

// const taskData = new Task ({
//     task_name: "Dance lesson",
//     user_name: "Mary",
//     description: "Every wednesday at 10:00am",
//     duration:"2",
//     location:"Tokyo Station",
//     date:10_08_2024,
//     completed:true,
// })
// taskData.save()

// const productData = new Product ({
//     productName:"Table",
//     productDescription:"Made in Japan",
//     year:2024,
//     color:"Brown",
// })
// productData.save()

//Home Page
app.get('/',(req,res)=>{
    res.send("Hello Express!")
})

//API URLS
app.get('/users',async(req,res)=>{
    //db.collectionName.find({})
    //User.find({})
    const getAllUsers=await User.find({})
    res.send(getAllUsers)
})

app.get('/task',async(req,res)=>{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
})

app.get('/movies',async(req,res)=>{
    const getAllMovies=await Movie.find({})
    res.send(getAllMovies)
})

app.get('/product',async(req,res)=>{
    const getAllProduct=await Product.find({})
    res.send(getAllProduct)
})

//POST

app.post('/adduser',async(req,res)=>{
    // req > request
    // ? req.qurey
    // req.body
    const userData = new User(req.body)
    userData.save()
    res.send(userData)
})

//
app.post('/addtask',async(req,res)=>{
    const taskData = new Task (req.body)
    taskData.save()
    res.send(taskData)
})

//

app.post('addmovie',async(req,res)=>{
    const moviesData = new Movie (req.body)
    moviesData.save()
    res.send(moviesData)
})

//GET_ID
app.get('/users/:id',async(req,res)=>{
//  requesting the data through body >> req.body
//  requesting the data through query >> req.query
//  requesting the data through params  >> req.params
//  Model.findById
const getUser=await User.findById(req.params.id)
res.send(getUser)
})

app.get('/task/:id',async(req,res)=>{
    const getTask = await Task.findById(req.params.id)
    res.send(getTask)
})

app.get('/movie/:id',async(req,res)=>{
    const getMovie = await Movie.findById(req.params.id)
    res.send(getMovie)
})
//UPDATE

app.put('/users/:id',async(req,res)=>{
    //req.params
    //req.body
    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)
})

// TASK

app.put('/task/:id',async(req,res)=>{
    const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
})

//Movie
app.put('/movie/:id',async(req,res)=>{
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id,req.body.{new:true,runValidators:true})
    res.send(updateMovie)
})

//DELETE

app.delete('/users/:id',async(req,res)=>{
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.send({
        deletedUser:deleteUser,
        message:"Deleted Successfully"
    })
})

app.delete('/task/:id',async(req,res)=>{
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    res.send({
        deletedTask:deleteTask,
        message:"deleted successfully"
    })
})

app.delete('/movie/:id',async(req,res)=>{
    const deleteMovie = await Movie.findByIdAndDelete(req.params.id)
    res.send({
        deleteMovie:deleteMovie.Movie,
        message:"deleted Successfully"
    })
})

const PORT = 8002
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})