import React, { useState } from 'react';
import  {setToken}  from '../lib/auth';

export default function Login() {
  const url = "http://localhost:1337/api/auth/local"

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handlemailchange = (e)=>{
     setEmail(e.target.value)

  }
  const handlepasswordchange = (e)=>{
    setPassword(e.target.value)

 }



 const handleLoginSubmit = async(e) => {

    e.preventDefault()

     const response = await fetch(url,{ 
       method:"POST",
       headers:{
         "Content-Type":"application/json",
       },
       body:JSON.stringify({ 
         identifier:email, 
         password:password
       })
     })

     console.log(response)

     if(response.ok){ 
       console.log("successfully logged in!!")
       const data = await response.json();
      setToken(data)
     }


 }


 






  return (
    <div>
        <div className="login-box">

          <form onSubmit={handleLoginSubmit}>

            <input type="email" onChange={handlemailchange} required placeholder="jjon@example.com"></input>
            <input type="password" onChange={handlepasswordchange} required placeholder="Password"></input>
            <button type='submit'>Login</button>
          </form>

        </div>
    </div>
  )
}
