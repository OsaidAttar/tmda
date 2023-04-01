import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {
    let [Detail,setDetails] =useState('')
    let params=useParams();
    let getDetails= async()=>{
let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US`)
setDetails(data)

console.log("data");
console.log(data);
    }
    useEffect(() => {
    getDetails()
    }, [])
    
  return (
    <div>
         <img src={"https://image.tmdb.org/t/p/w500"+Detail.backdrop_path} alt="" />
        
         
        <h2>{Detail.title}</h2>
        <h4>{Detail.overview}</h4>
        <p>Rating/10 : {Detail.vote_average} </p>
    </div>
  )
}
