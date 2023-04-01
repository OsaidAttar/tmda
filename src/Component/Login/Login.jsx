import React,{ useState } from 'react'
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  let navigate=useNavigate()
  let [errorList,setErrorList] =useState([]);
  let [user,setUser] =useState({
    email:'',
    password:''
  })
  function getData(e){
    let myUser=user
    ;
    myUser[e.target.name]=e.target.value
    setUser(myUser)
  }
  async function submitRegister(e){
    e.preventDefault();
    let result =validate(user)
    if(result.error){
      setErrorList((result.error.details))
    }
    else{
      let {data}=await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin',user)
      if(data.message==='success'){
         localStorage.setItem('users',data.token);
        props.getUserData();
        navigate("/movies")
      }
    }
  }
  function validate(user){
    let schema =Joi.object({
     
        email:Joi.string().email({minDomainSegments:2,tlds: {allow:['com','net']}}),
      
        password :Joi.string().required().pattern(/[A-Z][a-z]{3,8}/ ).messages({
          "string.pattern.base":"invalid input",
            "string.empty":"password empty"
           

        })
       
      
    })
    
  return schema.validate(user,{abortEarly:false})
  
}
  return (
    <div className='my-5 py-5'>
    {errorList&&errorList.map((err,index)=>
        <div className='alert alert-danger' key={index}>
{err.message}
        </div>
    )}
      <form onSubmit={submitRegister}>
 
  <div className="form-group row">
    <label htmlFor="inputemail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onChange={getData} type="email" className="form-control" name='email' id="inputemail" placeholder="Email" />
    </div>
  </div>


  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onChange={getData} type="password" className="form-control" name='password' id="inputPassword" placeholder="Password" />
    </div>
    <button type='submit' className='btn-btn-primary w-50'>Submit</button>
  </div>

  
 
</form>

    </div>
  )
}
