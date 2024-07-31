import React, { useEffect } from 'react'
import { useFormik } from 'formik'

function AddMovie_Formik(){
    useEffect(()=>{
        console.log("API call for adding movie")
        let timer=setInterval(()=>{
            console.log("1000")
        },1000)
        //unmounting phase
        return()=>{
            console.log("Unmounted!!!!")
            clearInterval(timer)
        }
        },[])
    const formik=useFormik({
        initialValues:{
            moviename:"",
            movieposter:"",
            movierating:"",
            moviesummary:"",
            moviecast:"",
            movietrailer:"",
            publishYear:"",
            movieLikeNum:"",
            movieDisLikeNum:"",
            movieGenres:"",
            movieCategory:"",
        },
        onSubmit:(values)=>{
            console.log(values)
        }   
    })
console.log(formik)
    //handleSubmit
    //handleChange
    //values > (movieName:"",moviePoster:""...)
    
    return(
        <>
    <div>
        <h2>Add Movie</h2>
        <form onSubmit={formik.handleSubmit}>
            {/* MOVIE NAME */}
            <input type="text" name="moviename" id="moviename" placeholder='Movie Name' onChange={formik.handleChange} value={formik.values.moviename}/> <br />

            {/* MOVIE POSTER */}
            <input type="text" name="movieposter" id="movieposter" placeholder="Movie Poster" onChange={formik.handleChange} value={formik.values.movieposter} /> <br />

            {/* MOVIE RATING */}
            <input type="text" name="movierating" id="movierating" placeholder='Rating' onChange={formik.handleChange} value={formik.values.movierating} /> <br />

            {/* MOVIE SUMMARY */}
            <input type="text" name="moviesummary" id="moviesummary" placeholder='Summary' onChange={formik.handleChange} value={formik.values.moviesummary}/> <br />

            {/* MOVIE CAST */}
            <input type="text" name="moviecast" id="moviecast" placeholder='Cast' onChange={formik.handleChange} value={formik.values.moviecast}/> <br />

            {/* Trailer */}
            <input type="text" name="movietrailer" id="movietrailer" placeholder='Trailer' onChange={formik.handleChange} value={formik.values.movietrailer} /> <br />

            {/* PUBLISH YEAR */}
            <input type="text" name="publishYear" id="publishYear" placeholder='Publish Year' onChange={formik.handleChange} value={formik.values.publishYear}/> <br />

            {/* LIKE NUM */}
            <input type="text" name="movieLikeNum" id="movieLikeNum" placeholder='Like Number' onChange={formik.handleChange} value={formik.values.movieLikeNum} /> <br />

            {/* DISLIKE NUM */}
            <input type="text" name="movieDisLikeNum" id="movieDisLikeNum" placeholder='Dislike Number' onChange={formik.handleChange} value={formik.values.movieDisLikeNum} /> <br />

            {/* GENRES */}
            <input type="text" name='movieGenres' id="movieGenres" placeholder='Genres' onChange={formik.handleChange} value={formik.values.movieGenres} /> <br />

            {/* Category */}
            <input type="text" name="movieCategory" id="movieCategory" placeholder='Category' onChange={formik.handleChange} value={formik.values.movieCategory} /> <br />

            {/* ADD MOVIE */}
            <button type="submit">ADD MOVIE</button>

            {/* Back */}
            <button type="submit">BACK</button>
            
        </form>
    </div>
        </>
    )
}
export default AddMovie_Formik
