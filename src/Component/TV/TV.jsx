import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Tv() {
    let [TV,setTV]=useState([])
    let [search,setSearch] =useState('')
    let params=useParams()
    let getMovies=async()=>{
        let {data}=await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US&page=1/${params.id}`)
        setTV(data.results)
        console.log("tv");
        console.log(data);
    }

    useEffect(() => {
        getMovies()
    }, [])
  return (
        <>
       <h2 className='text-center m-auto mt-5 py-5'>All TVs</h2>
       <h3 className='mb-4 m-auto text-center'>search by title : </h3>
        <input type="search" className='form-control' name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <Link to={`/tv/TvOnAir`} className='btn btn-primary m-5'>TvOnAir</Link>
       <div className="d-flex flex-wrap">
        {TV.filter((movie)=>{
          if (search===''){
            return TV
          }
          else if(movie.title.toLowerCase().includes(search.toLowerCase())){
            return TV
                      }
        })
        .map((TV)=>{
         return  <div className='d-flex flex-wrap col-lg-3 my-5 px-3 '>
          
           <div className='product card px-3'>
             <div >
               {TV.backdrop_path?
             <img src={"https://image.tmdb.org/t/p/w500"+TV.backdrop_path} class="card-img-top" alt={TV.title} />:<img src={'imgs/2222.jpg'} className="card-img-top"/>}
             <div class="card-body ">
               <h3 class="card-title">{TV.name}</h3>
              
               
              
             
               <Link to={`/tv/${TV.id}`} className='btn btn-danger'>details</Link>
               <Link to={`/tv/reviewtv/${TV.id}`} className='btn btn-danger mx-2'>review</Link>
             
             </div>
           </div>
           </div>
           </div>
          
        })}
    </div>
    </>
  )
}
