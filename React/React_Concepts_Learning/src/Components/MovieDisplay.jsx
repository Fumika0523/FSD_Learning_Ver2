import MovieCard from "./MovieCard"

function MovieDisplay({movie}){
    let displayStyle={
      display:"flex",
      gap:"1%",
      flexWrap:"wrap",
    }
    return(
        <>
    <div style={displayStyle}>
                  {
    movie?.map((element,index)=>(
      <MovieCard movieposter={element.movieposter}  moviename={element.moviename} rating={element.rating} summary={element.summary} cast={element.cast} key={index}/>
      //key={index}, if you have id > key={element.id}
    ))
  }
  </div>
        </>
    )
}
export default MovieDisplay