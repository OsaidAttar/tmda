import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    let navigate =useNavigate();
    let [errorList,setErrorList] =useState([]);
    let [user,setUser]=useState({
        name:'',
        email:"",
        age:0,
        password:""
    })
    function getData(e){
        let myUser=user
myUser[e.target.name]=e.target.value
setUser(myUser)
    }
    async function submitRegister(e){
        e.preventDefault();
        let result =validate(user)
        if(result.error){
setErrorList(result.error.details)
        }
        else{
          let {data}=await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup',user)
          console.log(data);
          if(data.message==='success'){
            console.log('hhh');
            navigate('/login')
          }
        }
    }
    function validate(user){
      let schema =Joi.object({
        name:Joi.string().min(4).max(20).required(),
        email:Joi.string().email({minDomainSegments:2,tlds: {allow:['com','net']}}),
        age :Joi.number().min(20).max(80),
        password :Joi.string().required().pattern(/[A-Z][a-z]{3,8}/).messages({
          "string.pattern.base":"invalid input",
            "string.empty":"password empty"
           

        }),
        cPassword:Joi.valid(Joi.ref('password')).required()
      })
       return schema.validate(user,{abortEarly:false})
    }
  return (
    
    <div className='my-5 py-5'>
{errorList.map((err,index)=>{
  return <div className='alert alert-danger' key={index}>
    {err.message}
  </div>
})}
<form onSubmit={submitRegister}>
  <div className="form-group row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onChange={getData} type="name" name='name'  className="form-control" id="name" placeholder="Name" />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputemail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onChange={getData} type="email" className="form-control" name='email' id="inputemail" placeholder="Email" />
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="inputage" className="col-sm-2 col-form-label">age</label>
    <div className="col-sm-10">
      <input onChange={getData} type="number" className="form-control" name='age' id="inputage" placeholder="age" />
    </div>
    
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onChange={getData} type="password" className="form-control" name='password' id="inputPassword" placeholder="Password" />
    </div>
   
  </div>
  <div className="form-group row">
    <label htmlFor="inputcPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onChange={getData} type="password" className="form-control" name='cPassword' id="inputcPassword" placeholder="Password" />
    </div>
    <button type='submit' className='btn-btn-primary'>Submit</button>
  </div>
</form>

   

    </div>
  )
}
