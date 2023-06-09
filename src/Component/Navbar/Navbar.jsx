import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/home">T-Shop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {props.user ? 
      <>
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 <li className="nav-item">
         <Link className="nav-link" to="/trending">Trending</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/movies">Movies</Link>
       </li>
      
       <li className="nav-item">
         <Link className="nav-link" to="/tv">TV</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/people">People</Link>
       </li>
      
      
       </ul>
      </>:null
      }
     

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
      {props.user==null?  <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>:null}
        {props.user==null?  <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>:null}
        {props.user?   <li className="nav-item">
          <span className={`nav-link ${style.imgs} `} onClick={props.logout}>Logout</span>
        </li>:null}
        
      </ul>
  
    </div>
  </div>
</nav>

    </div>
  )
}
