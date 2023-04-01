import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function TVOnAir() {
    let [TVOnAir,setTVOnAir]=useState([])
    let [search,setSearch] =useState('')
    let params=useParams()
    let getMovies=async()=>{

        let {data}=await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US&page=1`)
        setTVOnAir(data.results)
        console.log("topRate anas");
        console.log(data);
        console.log(TVOnAir[9].backdrop_path == null );
    }
    // console.log(null == undefined);

    useEffect(() => {
        getMovies()
    }, [])
  return (
        <>
       <h2 className='text-center m-auto mt-5 py-5'>The TvOnAirs</h2>
       <h3 className='mb-4 m-auto text-center'>search by title : </h3>
        <input type="search" className='form-control' name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        
       <div className="d-flex flex-wrap">
        {TVOnAir.filter((movie)=>{
          if (search===''){
            return TVOnAir
          }
          else if(movie.title.toLowerCase().includes(search.toLowerCase())){
            return TVOnAir
                      }
                 
        })
        
        .map((TVOnAir)=>{
         return  <div className='d-flex flex-wrap col-lg-3 my-5 px-3 '>
          
           <div className='product card px-3'>
             <div >
             {TVOnAir.backdrop_path != null ?
             <img src={"https://image.tmdb.org/t/p/w500"+TVOnAir.backdrop_path} loading="lazy" class="card-img-top" alt={TVOnAir.title} /> :<img src={'../imgs/2222.jpg'}  className="card-img-top"/>}
             <div class="card-body ">
               <h3 class="card-title">{TVOnAir.name}</h3>
               {/* <img src={'imgs/2222.jpg'} loading="lazy" className="card-img-top"/> */}
               <p>first-air-date : {TVOnAir.first_air_date} </p>
               <p>Rating/10 : {TVOnAir.vote_average} </p>
               <p>count voted : {TVOnAir.vote_count} </p>
              
               
              
             
             </div>
           </div>
           </div>
           </div>
          
        })}
    </div>
    </>
  )
}
