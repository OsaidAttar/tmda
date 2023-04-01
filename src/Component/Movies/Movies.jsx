import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Movies() {
    let [movies,setMovies]=useState([])
    let [search,setSearch] =useState('')
    let params=useParams()
    let getMovies=async()=>{
        let {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US&page=1/${params.id}`)
        setMovies(data.results)
      
    }
    useEffect(() => {
        getMovies()
    }, [])
  return (
        <>
       <h2 className='text-center m-auto mt-5 py-5'>All Movies</h2>
       <h3 className='mb-4 m-auto text-center'>search by title : </h3>
        <input type="search" className='form-control' name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <Link to={`/movies/topRated`} className='btn btn-primary m-5'>TopRate</Link>
       <div className="d-flex flex-wrap">
        {movies.filter((movie)=>{
          if (search===''){
            return movies
          }
          else if(movie.title.toLowerCase().includes(search.toLowerCase())){
            return movies
                      }
                 
        })
        
        .map((moives)=>{
         return  <div className='d-flex flex-wrap col-lg-3 my-5 px-3 '>
          
           <div className='product card px-3'>
             <div >
               
             <img src={"https://image.tmdb.org/t/p/w500"+moives.backdrop_path} class="card-img-top" alt={moives.title} />
             <div class="card-body ">
               <h3 class="card-title">{moives.title}</h3>
              
               <p> {moives.media_type} </p>
              
               <Link to={`/movies/${moives.id}`} className='btn btn-danger'>details</Link>
               <Link to={`/movies/review/${moives.id}`} className='btn btn-danger mx-2'>review</Link>
              
             
             </div>
           </div>
           </div>
           </div>
          
        })}
    </div>
    </>
  )
}
