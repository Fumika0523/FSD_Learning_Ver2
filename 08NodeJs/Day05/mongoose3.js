const mongoose=require('mongoose')
const { isNumberObject } = require('util/types')
mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")

const Movies=mongoose.model("Movies",{
    movieposter:{type:String,required:true},
    moviename:{type:String,required:true,lowercase:true},
    rating:{type:Number,required:true,default:7},
    summary:{type:String,default:false},
    cast:{type:String,default:"Scarlett Johansson"},
    trailer:{type:String,required:true},
    publishYear:{type:Number,default:2024},
    likeNum:{type:Number,required:true},
    dislikeNum:{type:Number,required:true},
    genres:{type:String,default:"comedy"},
    category:{type:String,default:"family film"}
})

const moviesData = new Movies (
{
    movieposter:"https://c4.wallpaperflare.com/wallpaper/920/355/589/cihiro-disney-spirited-away-entertainment-movies-hd-art-wallpaper-preview.jpg",
    moviename: "Spirited Away",
    rating: 8.6,
    summary: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
    cast: "Rumi Hiiragi,Miyu Irino,Mari Natsuki,Takashi Naito,Yasuko Sawaguchi,Tsunehiko ,Takehiko Ono,Bunta Sugawara",
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
    publishYear: 2001,
    likeNum: 4000,
    dislikeNum: 1200,
    genres: "Fantasy, Adventure and Animation.",
    category: "Feel-good, Imaginative"
}
)

const connection=async()=>{
    const res=await moviesData.save()
    console.log(res,"Added to DB")
}
connection()