import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Trending() {
    let [Trending,setTrending]=useState([])
    let [search,setSearch] =useState('')
    let params=useParams()
    let getTrending=async()=>{
        let {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=2a18feb51ed3c91e90e74912211de26a`)
        setTrending(data.results)
        console.log(data);
    }
    useEffect(() => {
        getTrending()
    }, [])
  return (
        <div className='d-flex flex-wrap my-5 px-2'>
        {Trending.filter((trend)=>{
          if (search===''){
            return Trending
          }
          else if(trend.title.toLowerCase().includes(search.toLowerCase())){
            return Trending
                      }
                 
        })
        .map((trend)=>{
         return  <div className='col-lg-3 mt-5  '>
           <div className='product card d-flex justify-content-center '>
             <div className='p-0'>
             <img src={"https://image.tmdb.org/t/p/w500"+trend.backdrop_path} class="card-img-top" alt={trend.title} />
             <div class="card-body ">
               <h3 class="card-title">{trend.title}</h3>
               <h3 class="card-title">{trend.name}</h3>
               <p> {trend.media_type} </p>
             </div>
           </div>
           </div>
           </div>
        })}
    </div>
  )
}
