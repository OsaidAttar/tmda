import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Details from './Component/Details/Details'

import Login from './Component/Login/Login'
import Movies from './Component/Movies/Movies'

import Navbar from './Component/Navbar/Navbar'
import NotFound from './Component/NotFound/NotFound'
import People from './Component/People/People'

import PeopleDetails from './Component/People/PeopleDetails'
import ProtectRoute from './Component/ProtectRoute/ProtectRoute'
import Register from './Component/Register/Register'
import Trending from './Component/Trending/Trending'
import TV from './Component/TV/TV'
import TvOnAir from './Component/TV/TVOnAir'
import TopRateMovies from './Component/Movies/TopRateMovies'
import Review from './Component/Movies/Review'
import DatailsTv from './Component/TV/DatailsTv'
import TVOnAir from './Component/TV/TVOnAir'
import ReviewTv from './Component/TV/ReviewTv'
import Home from './Component/Home/Home'
export default function App() {
  let [userData,setUserData]=useState(null)
  let nevigate=useNavigate()
  
  function getUserData(){
console.log(localStorage.getItem('users'));
 
    let decoded=jwtDecode(localStorage.getItem('users'))
    console.log(decoded);
    setUserData(decoded);

  }
  useEffect(()=>{
    if(localStorage.getItem('users')){
      getUserData();
    }
  },[])
  function logout(){
    localStorage.removeItem('users')
    setUserData(null)
    nevigate('/login')
  }
  return (
    <div>
      <Navbar user={userData} logout={logout}/>
      <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login getUserData={getUserData}/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route element={<ProtectRoute />}>
        <Route path='/trending' element={<Trending />}></Route>
       
        <Route path='/tv' element={<TV/>}></Route>
        <Route path='/tv/TvOnAir' element={<TvOnAir/>}></Route>
        <Route path='/tv/reviewtv/:id' element={<ReviewTv />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
       
        <Route path='/movies/topRated' element={<TopRateMovies />}></Route>
        
        <Route path='/movies/:id' element={<Details />}></Route>
        <Route path='/movies/review/:ids' element={<Review />}></Route>
        <Route path='/tv/:id' element={<DatailsTv />}></Route>
     
        <Route path='/people' element={<People />}></Route>
 
        <Route path='/people/:id' element={<PeopleDetails />}></Route>
      <Route path='*' element={<NotFound/> }></Route>
        </Route>
       
      </Routes>

      
    </div>
  )
}


