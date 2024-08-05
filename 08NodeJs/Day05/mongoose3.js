const mongoose=require('mongoose')
const { isNumberObject } = require('util/types')
mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")

const Movies=mongoose.model("Movies",{
    movieposter:{type:String},
    moviename:{type:String},
    rating:{type:Number},
    summary:{type:String},
    cast:{type:String},
    trailer:{type:String},
    publishYear:{type:Number},
    likeNum:{type:String},
    dislikeNum:{type:Number},
    genres:{type:String},
    category:{type:String}
})

const moviesData = new Movies (
{
    movieposter: "https://wallpaper.forfun.com/fetch/9e/9ecb1bde13312342443ee0b18aeb70ed.jpeg",
    moviename: "Iron man 2",
    rating: "7",
    summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    cast: "Robert Downey Jr.,Gwyneth Paltrow,Don Cheadle,Scarlett Johansson,Sam Rockwell,Mickey Rourke,Samuel L. Jackson",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    publishYear: "2010",
    likeNum: "3.8k",
    disLikeNum: "1.2k",
    genres: "Actiono & Adventure Movies, US Movies"
    // category: "Exciting",
}
)

const connection=async()=>{
    const res=await moviesData.save()
    console.log(res,"Added to DB")
}
connection()