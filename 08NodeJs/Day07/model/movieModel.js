const mongoose=require('mongoose')

const movieSchema=new mongoose.Schema({
    movieposter:{type:String,required:true},
    moviename:{type:String,required:true,lowercase:true},
    rating:{type:String,required:true,default:7},
    summary:{type:String,default:false},
    cast:{type:String,default:"Scarlett Johansson"},
    trailer:{type:String,required:true},
    publishYear:{type:String,default:2024},
    disLikeNum:{type:String,required:true},
    genres:{type:String,default:"comedy"},
    category:{type:String,default:"family film"}
})

const Movie=mongoose.model("Movie",movieSchema)

module.exports=Movie