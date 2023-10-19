import React, { useState } from 'react';
import  {setToken}  from '../lib/auth';

function Signup() {

  const url = "http://localhost:1337/api/auth/local/register"

  const[username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleChangeUserName =(e)=>{
    setUsername(e.target.value)
  }

  const handleChangeEmail = (e)=>{
     setEmail(e.target.value);
  }

  const handleChange1 = (e) => {
    setPassword1(e.target.value);
  };

  const handleChange2 = (e) => {
    setPassword2(e.target.value);
  };



  const Performsignup = (e) => {
    e.preventDefault();

  if(password1 != '')
    if (password1 === password2) {
      // Passwords match, call the signup function with the password.
      alert('Signed in successfully!!') 
      sendcred(email,password1,username);
    } else { 
      // Passwords do not match, handle the error or show a message.
      console.error('Passwords do not match');
      alert('Passwords do not match')
    }
  };

  const sendcred = async (email,password,username) =>{

     const response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        username:username,
        email:email,
        password:password
      })

     })

     console.log(response)
if(response.ok)
     {   
      console.log("valid resposne")
      const data = await response.json()
      setToken(data)
    }

else {
  console.log(response)
}
     
  }
  

  return (
    <div>
    
      <form >


        <input type="text" name="username" onChange={handleChangeUserName} placeholder="johndoe" id="text" required />
        <input type="email" name="mailid" onChange={handleChangeEmail} placeholder="johndoe@example.com" id="email" required />
        <input type="password" name="pass" onChange={handleChange1} placeholder="Password" id="password" className='p1' required/>
        <input type="password" name="pass" onChange={handleChange2} placeholder="Check Password" id="checkpassword" className='p2' required/>

        <button type="submit" onClick={Performsignup}>Submit</button>
      </form>


    </div>
  );
}

export default Signup;
