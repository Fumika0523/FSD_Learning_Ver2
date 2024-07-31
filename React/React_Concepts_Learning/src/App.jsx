import './App.css'
import APIcall from './Components/APIcall';
import MovieDisplay from './Components/MovieDisplay';
import ReactComponent from './Components/ReactComponent';
// import APIcall2 from './Components/APIcall2'
import APIcall3 from './Components/APIcall3';
import Context from'./Components/useContext/Context';
import Adduser_Formik from './Components/Adduser_Formik';
import AddMovie_Formik from './Components/AddMovie_Formik';
import {Provider} from 'react-redux' 
import store from './utils/store';
import React, {useState} from 'react'
import textContext from './utils/textContext';
import cartContext from './utils/cartContext';
import ClassAbout from './Components/ClassAbout';



function App() {

  
  const movie = [
    {
      movieposter:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      moviename: "RRR",
      rating: "8.8",
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments",
      cast:"N. T. Rama Rao Jr,Ram Charan,Ajay Devgn,Alia Bhatt,Shriya Saran,Samuthirakani,Ray Stevenson,Alison Doody,Olivia Morris"
      },
    {
      movieposter:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@.V1_FMjpg_UX1000.jpg",
      moviename: "Iron man 2",
      rating: "7",
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      cast:"Robert Downey Jr.,Gwyneth Paltrow,Don Cheadle,Scarlett Johansson,Sam Rockwell,Mickey Rourke,Samuel L. Jackson"
      },
    {
      movieposter:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      moviename: "No Country for Old Men",
      rating: "8.1",
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      cast:"Tommy Lee Jones,Javier Bardem,Josh Brolin"
      },
    {
      movieposter:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5.V1_FMjpg_UX1000.jpg",
      moviename: "Jai Bhim",
      rating: "8.8",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      cast:"Suriya,Lijomol Jose,Manikandan"
      },
    {
      movieposter:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      moviename: "The Avengers",
      rating: "8",
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
      cast:"Robert Downey Jr.,Chris Evans,Mark Ruffalo,Chris Hemsworth,Scarlett Johansson,Jeremy Renner,Tom Hiddleston,Stellan Skarsgård,Samuel L. Jackson"
      },
    {
      movieposter: "https://m.media-amazon.com/images/I/A1JVqNMI7UL.SL1500.jpg",
      moviename: "Interstellar",
      rating: "8.6",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      cast:"Matthew McConaughey,Anne Hathaway,Jessica Chastain,Bill Irwin,Ellen Burstyn,Michael Caine"
      },
    {
      movieposter: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      moviename: "Baahubali",
      rating: "8",
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      cast:"Prabhas,Rana Daggubati,Anushka Shetty,Tamannaah Bhatia,Ramya Krishna,Sathyaraj,Nassar"
      },
    {
      movieposter:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      moviename: "Ratatouille",
      rating: "8",
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      cast:"Patton Oswalt,Ian Holm,Lou Romano,Brad Garrett,Peter O'Toole,Janeane Garofalo,Brian Dennehy,Peter Sohn,Will Arnett"
      },
    {
      movieposter:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      moviename: "96",
      rating: "8.6",
      summary:
        "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",
      cast:"Vijay Sethupathi,Trisha Krishnan,Gouri G. Kishan,Aadithya Bhaskar,Rihan Thakur"
      },
    {
      movieposter: "https://m.media-amazon.com/images/I/71miTEyKvYL.SL1112.jpg",
      moviename: "M.S. Dhoni: The Untold Story",
      rating: "7.9",
      summary:
        "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
      cast:"Sushant Singh Rajput,Disha Patani,Kiara Advani,Anupam Kher,Bhumika Chawla,Kranti Prakash Jha,Alok Pandey"
      },
    {
      movieposter:
        "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      moviename: "Dark Knight",
      rating: "9",
      summary:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice",
      cast:"	Christian Bale,Michael Caine,Heath Ledger,Gary Oldman,Aaron Eckhart,Maggie Gyllenhaal,Morgan Freeman"
      },
    {
      movieposter: "https://m.media-amazon.com/images/I/817FBcXLN2L.SL1500.jpg",
      moviename: "King Kong",
      rating: "9",
      summary:
        "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor.",
      cast:"Naomi Watts,Jack Black,Adrien Brody,Thomas Kretschmann,Colin Hanks,Jamie Bell,Andy Serkis"
      },
  ];

  const [cartUCtxt,setCartUtxt] = useState(0)  
const [textUseContext,setTextUseContext] = useState("Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.")

  return (
    <>
    <Provider store={store}>
      <cartContext.Provider value={[cartUCtxt,setCartUtxt]}>
      <textContext.Provider value={[textUseContext,setTextUseContext]}>

      <div>
        <h6>{textUseContext}</h6>
        <ClassAbout/>
      <AddMovie_Formik/>
      {/* <MovieDisplay movie={movie} />
      <ReactComponent/>
      
      {/* <MovieCard/> */}
      {/* <APIcall/> */}
      {/* <APIcall2/> */}
      {/* <APIcall3/>  */}
      <Adduser_Formik/>
    <Context/>
    </div>
    </textContext.Provider>
    </cartContext.Provider>
    </Provider>
     </>
  );
}
export default App;

// if its above 8, green color on rating.
//below 8, red color 
//when you click plus icon,hide the summary and click again, unhide.
// Boostrap > html , CSS

//React-Boostrap > framework > className="mx-2"

//update the Router

//user slice > 