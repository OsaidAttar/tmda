import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function PeopleDetails() {
    let [DetailPreson,setDetails] =useState('')
    let params=useParams();
    let getDetails= async()=>{
let {data}= await axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US`)
setDetails(data)

console.log("person");
console.log(data);
    }
    useEffect(() => {
    getDetails()
    }, [])
    
  return (
    
        <div className='col-lg-3 mt-5  px-2'>
           <div className='product card d-flex justify-content-center '>
             <div>
             <img src={"https://image.tmdb.org/t/p/w500"+DetailPreson.profile_path} class="card-img-top" alt={DetailPreson.title} />
             <div class="card-body ">
               <h3 class="card-title">{DetailPreson.name}</h3>
               <h3 class="card-title">{DetailPreson.birthday}</h3>
               <p> {DetailPreson.biography} </p>
               </div>
               </div>
               </div>
    </div>
  )
}
