import React, { useState } from 'react';
import  {setToken}  from '../lib/auth';
import { Link } from 'react-router-dom';


function Signup() {

  const url = `${import.meta.env.VITE_BACK_URL}/api/auth/local/register`

  const[username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error_msg,setError_msg] = useState('');

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
      console.log('Signing in...') 
      sendcred(email,password1,username);
    } else { 
      // Passwords do not match, handle the error or show a message.
      console.error('Passwords do not match');
      setError_msg('Passwords do not match')
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
  const data = await response.json()
  if(data.error.name === "InternalServerError"){
    setError_msg("The username is already taken or the mail is already registered")
  }
  
}
     
  }
  

  return (
    <div className='h-screen w-[100%] flex flex-col justify-center items-center'>
    <div className="login-box border border-black w-[40%]">
    <span className=" m-60">
         <h1 className="mt-[0.1em] text-[#242427] text-center m-2  text-6xl font-bold p-0">Events</h1>
         <p className='text-center text-3xl font-semibold m-4'>Create an account</p>
         <p className='text-center'>Already have an account? <Link className='underline' to="/login">Login</Link></p>
         </span>
      <form  className='flex flex-col w-[100%]' >
        <input type="text" name="username" onChange={handleChangeUserName} placeholder="username" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-[90%] text-left p-2.5 my-3" required />
        <input type="email" name="mailid" onChange={handleChangeEmail} placeholder="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-[90%] text-left p-2.5 my-3" required />
        <input type="password" name="pass" onChange={handleChange1} placeholder="Password" id="password" className='p1 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-[90%] text-left p-2.5 my-3' required/>
        <input type="password" name="pass" onChange={handleChange2} placeholder="Check Password" id="checkpassword" className='p2 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-[90%] text-left p-2.5 my-3' required/>

        <button type="submit" className="my-0 mx-auto text-center text-white bg-[#242427] px-2 py-1 mb-3  text-2xl rounded-md font-hls w-[90%]" onClick={Performsignup}>Submit</button>
      </form>
      </div>
      <p className=' text-red-500'>{error_msg}</p>


    </div>
  );
}

export default Signup;
