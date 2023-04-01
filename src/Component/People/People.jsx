import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function People() {
    let [person,setPerson]=useState([])
    let [search,setSearch] =useState('')
    let params=useParams()
    let getPerson=async()=>{
        let {data}=await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US&page=1/${params.id}`)
        setPerson(data.results)
        console.log(data);
    }
    console.log("person");
    console.log(person);
    useEffect(() => {
        getPerson()
    }, [])
  return (
    <div className=' my-5 px-2'>
      <h2 className='text-center m-auto mt-5 py-5'>All People</h2>
       <h3 className='mb-4 m-auto text-center'>search by name : </h3>
        <input type="search" className='form-control' name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
       
       <div className="d-flex flex-wrap">
        {person.filter((per)=>{
          if (search===''){
            return person
          }
          else if(per.name.toLowerCase().includes(search.toLowerCase())){
            return person
                      }
                 
        })
               .map((per)=>{
         return  <div className='col-lg-3 mt-5  px-2'>
           <div className='product card d-flex justify-content-center '>
             <div>
             <img src={"https://image.tmdb.org/t/p/w500"+per.profile_path} class="card-img-top" alt={person.title} />
             <div class="card-body ">
               <h3 class="card-title">{per.title}</h3>
               <h3 class="card-title">{per.name}</h3>
               <p> {per.media_type} </p>
               <Link to={`/people/${per.id}`} className='btn btn-danger'>details</Link>
              
             </div>
           </div>
           </div>
           </div>
        })}
    </div>
    </div>
  )
}
