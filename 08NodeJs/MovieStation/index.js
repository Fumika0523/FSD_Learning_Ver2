//create a new project with a moviestation 
//allmovies >>> all array data 

const express=require('express')
const app=express()

//HOME PAGE
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to MovieStation</h1>")
})

//About
app.get('/about',(req,res)=>{
    res.send("ABOUT US PAGE")
})

//ALL MOVIES
app.get('/allmovies',(req,res)=>{
    res.send([
            {
              "movieposter": "https://wallpaper.forfun.com/fetch/be/be3f7aa111c32a314d8015c8c8c5e22b.jpeg",
              "moviename": "1917",
              "rating": "8.2",
              "summary": "During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother.",
              "cast": "George MacKay,Dean-Charles Chapman,Mark Strong.Andrew Scott,Richard Madden,Colin Firth,Benedict Cumberbatch",
              "trailer": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UY1200_CR64,0,630,1200_AL_.jpg",
              "publishYear": "2020",
              "likeNum": "3k",
              "disLikeNum": "500",
              "genres": "Military Movies, British",
              "category": "Dark",
              "id": "1"
            },
            {
              "movieposter": "https://wallpaper.forfun.com/fetch/9e/9ecb1bde13312342443ee0b18aeb70ed.jpeg",
              "moviename": "Iron man 2",
              "rating": "7",
              "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
              "cast": "Robert Downey Jr.,Gwyneth Paltrow,Don Cheadle,Scarlett Johansson,Sam Rockwell,Mickey Rourke,Samuel L. Jackson",
              "trailer": "https://www.youtube.com/embed/wKtcmiifycU",
              "publishYear": "2010",
              "likeNum": "3.8k",
              "disLikeNum": "1.2k",
              "genres": "Actiono & Adventure Movies, US Movies",
              "category": "Exciting",
              "id": "2"
            },
            {
              "movieposter": "https://c4.wallpaperflare.com/wallpaper/920/355/589/cihiro-disney-spirited-away-entertainment-movies-hd-art-wallpaper-preview.jpg",
              "moviename": "Spirited Away",
              "rating": "8.6",
              "summary": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
              "cast": "Rumi Hiiragi,Miyu Irino,Mari Natsuki,Takashi Naito,Yasuko Sawaguchi,Tsunehiko ,Takehiko Ono,Bunta Sugawara",
              "trailer": "https://www.youtube.com/embed/ByXuk9QqQkk",
              "publishYear": "2001",
              "likeNum": "4k",
              "disLikeNum": "1.8k",
              "genres": "Fantasy, Adventure and Animation.",
              "category": "Feel-good, Imaginative",
              "id": "3"
            },
            {
              "movieposter": "https://www.vfx-courses.com/wp-content/uploads/2020/02/h13.jpg",
              "moviename": "Jumanji: The Next Level",
              "rating": "6.7",
              "summary": "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
              "cast": "Dwayne Johnson,Jack Black,Kevin Hart,Karen Gillan",
              "trailer": "https://www.youtube.com/embed/rBxcF-r9Ibs",
              "publishYear": "2019",
              "likeNum": "2k",
              "disLikeNum": "1k",
              "genres": "Family Movies, Comedy Movies, Movies Based on Books",
              "category": "Imaginative, Exciting",
              "id": "4"
            },
            {
              "movieposter": "https://images.alphacoders.com/111/1119553.jpg",
              "moviename": "The Avengers",
              "rating": "8",
              "summary": "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
              "cast": "Robert Downey Jr.,Chris Evans,Mark Ruffalo,Chris Hemsworth,Scarlett Johansson,Jeremy Renner,Tom Hiddleston,Stellan Skarsgård,Samuel L. Jackson",
              "trailer": "https://www.youtube.com/embed/1hPpG4s3-O4",
              "publishYear": "2012",
              "likeNum": "3k",
              "disLikeNum": "2k",
              "genres": "Actiono & Adventure Movies, US Movies",
              "category": "Exciting",
              "id": "5"
            },
            {
              "movieposter": "https://e0.pxfuel.com/wallpapers/953/308/desktop-wallpaper-rush-hour.jpg",
              "moviename": "Rush Hour",
              "rating": "7",
              "summary": "A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way.",
              "cast": "Jackie Chan,Chris Tucker,Tom Wilkinson,Chris Penn,Elizabeth Peña",
              "trailer": "https://www.youtube.com/embed/JMiFsFQcFLE",
              "publishYear": "1998",
              "likeNum": "4k",
              "disLikeNum": "1.5k",
              "genres": "Comedy Movies, Martial Arts Movies, Action & Adventure Movies",
              "category": "Exciting",
              "id": "6"
            },
            {
              "movieposter": "https://cbs6albany.com/resources/media/7a75d07a-9b75-4574-be1c-481811051704-large16x9_lettersflagswarnerbrothers.png?1593454121221",
              "moviename": "Letters from Iwo Jima",
              "rating": "7.8",
              "summary": "The story of the battle of Iwo Jima between the United States and Imperial Japan during World War II, as told from the perspective of the Japanese who fought it.",
              "cast": "Ken Watanabe,Kazunari Ninomiya,Tsuyoshi Ihara,Ryō Kase,Shidō Nakamura",
              "trailer": "https://www.youtube.com/embed/RpWLhBPVFBk",
              "publishYear": "2006",
              "likeNum": "3k",
              "disLikeNum": "1.9k",
              "genres": "Military Movies, Drama Movies, Movies Based on Books",
              "category": "Dark",
              "id": "7"
            },
            {
              "movieposter": "https://images7.alphacoders.com/112/1120946.jpg",
              "moviename": "Ratatouille",
              "rating": "8",
              "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
              "cast": "Patton Oswalt,Ian Holm,Lou Romano,Brad Garrett,Peter O'Toole,Janeane Garofalo,Brian Dennehy,Peter Sohn,Will Arnett",
              "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w",
              "publishYear": "2007",
              "likeNum": "4k",
              "disLikeNum": "2k",
              "genres": "Fammily Movies, Kids & Family Movies, Animation",
              "category": "Imaginative, Exciting",
              "id": "8"
            },
            {
              "movieposter": "https://images5.alphacoders.com/131/1315822.jpg",
              "moviename": "The Godfather",
              "rating": "9.2",
              "summary": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
              "cast": "Leonardo DiCaprio,Jonah Hill,Margot Robbie,Matthew McConaughey,Kyle Chandler,Rob Reiner,Jon Favreau,Jean Dujardin",
              "trailer": "https://www.youtube.com/embed/sY1S34973zA",
              "publishYear": "1972",
              "likeNum": "6k",
              "disLikeNum": "2k",
              "genres": "Classic Movies, Drama Movies, Movies Based on Books",
              "category": "Dark",
              "id": "9"
            },
            {
              "movieposter": "https://wallpapers.com/images/hd/wolf-of-wall-street-1280-x-800-background-jvta0mk65ixz7q55.jpg",
              "moviename": "The Wolf of Wall Street",
              "rating": "8.2",
              "summary": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
              "cast": "François Cluzet,Omar Sy",
              "trailer": "https://www.youtube.com/embed/GNGCav9fRhc",
              "publishYear": "2013",
              "likeNum": "3.9k",
              "disLikeNum": "1.9k",
              "genres": "Drama Movies, Comedy Movies, Movies Based on Books",
              "category": "Exciting",
              "id": "10"
            },
            {
              "movieposter": "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
              "moviename": "Dark Knight",
              "rating": "9",
              "summary": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice",
              "cast": "Christian Bale,Michael Caine,Heath Ledger,Gary Oldman,Aaron Eckhart,Maggie Gyllenhaal,Morgan Freeman",
              "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY",
              "publishYear": "2008",
              "likeNum": "5k",
              "disLikeNum": "2.8k",
              "genres": "Action & Adventure Movies",
              "category": "Dark, Exciting",
              "id": "11"
            },
            {
              "movieposter": "https://lh3.googleusercontent.com/-cQm0p5MrZgtX6Eh0BfNsaSq6SlKhWb_HVU1taXWB-mzH-s9BC5xA6KcZ5KEDGxmxq5kKIcmK3Ez",
              "moviename": "Good Will Hunting",
              "rating": "8.3",
              "summary": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
              "cast": "Robin Williams,Matt Damon,Ben Affleck,Stellan Skarsgård,Minnie Driver",
              "trailer": "https://www.youtube.com/embed/ReIJ1lbL-Q8",
              "publishYear": "1997",
              "likeNum": "3k",
              "disLikeNum": "2.1k",
              "genres": "Drama Movies,US Movies",
              "category": "Heartfelt,Sentimental,Bittersweet",
              "id": "12"
            },
            {
              "movieposter": "data:image/jpeg;base64,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",
              "moviename": "Bad Boyd Ride or Die",
              "rating": "7",
              "summary": "This Summer, the world's favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous comedy but this time with a twist: Miami's finest are now on the run.",
              "cast": " Will Smith, Martin Lawrence,  Hudgens",
              "trailer": "https://www.youtube.com/embed/tCMhoC1yStw",
              "publishYear": "2024",
              "likeNum": "24k",
              "disLikeNum": "2k",
              "genres": "Action",
              "category": "US movie",
              "id": "13"
            }
          
    ])
})

//ADD MOVIE
app.get('/addmovie',(req,res)=>{
    res.send("ADD MOVIE PAGE")
})

//SERVICE
app.get('/services',(req,res)=>{
    res.send("SERVICE PAGE")
})

//CONTACT US
app.get('/contact',(req,res)=>{
    res.send("CONTACT US PAGE")
})

// Product
// ?search=games&rating=5
// if anyone is not passing string, >> kindly check the search bar ,error message
// you need to show what they are searching, and what is the rating

app.get('/product',(req,res)=>{
  if(!req.query.search){
    res.send({
      "message":"Kindly Check the search bar" 
      //object key starting with a lower-case
    })
  }else{
    res.send(
      {"search":req.query.search,"rating":req.query.rating || 5} 
      // default rating value as 5
      //
    )
  }
})

const PORT=8002
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})