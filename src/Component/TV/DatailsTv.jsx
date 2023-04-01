import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetailsTv() {
    let [TV,setDetailsTV] =useState('')
    let params=useParams();
    let getDetails= async()=>{
let {data}= await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US`)

setDetailsTV(data)
console.log("tv");
console.log(data);
    }
    console.log(TV);
    useEffect(() => {
    getDetails()
    }, [])
 
  return (
    <div className='my-5 py-5'>
         <img src={"https://image.tmdb.org/t/p/w500"+TV.backdrop_path} alt="" />
      
         
        <h2>{TV.title}</h2>
        <h4>{TV.overview}</h4>
        <p>Rating/10 : {TV.vote_average} </p>
    </div>
  )
}
