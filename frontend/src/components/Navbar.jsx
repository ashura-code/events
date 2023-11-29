import Button from './Button.jsx';
import {Link} from 'react-router-dom';
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';
import { unsetToken } from '../lib/auth.jsx';


export default function Navbar() {
  
  const [user,setUser] = useState(false)

useEffect(()=>{
  if(Cookies.get('username')){ 
    setUser(true)
 }
},[])
  


  return (
    <div className="Navbar flex justify-between mb-[3em] pb-3 mt-2 border-b px-6">
      <div className="first flex">
        <Link to="/"><h1 className="mt-[0.1em] text-[#242427]  text-3xl font-bold p-0">Events</h1></Link>
      </div>

      <div>
        {

          !user ? (
            <div  className="second flex gap-4 align-middle justify-center">
              <Link to="/login" > <p className='mt-[0.5em]'>Login</p></Link>
              <Link to="/signup"> <Button name="Signup" /></Link>
            </div>
          ) : (
            <div  className="second flex gap-4 align-middle justify-center">
            <Link to="/your-tickets"><Button name="Your Tickets"/></Link>
            <Link to="/profile"> <Button name="Profile" /></Link>
            <a onClick={unsetToken}><Button onClick={unsetToken} name="Logout" /></a> 
          </div>
          )


        }
        
      </div>
    </div>
  );
}
