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
    <div className="Navbar">
      <div className="first">
        <Link to="/"><h1>Events</h1></Link>
        <ul>Music</ul>
        <ul>Concerts</ul>
        <ul>Movies</ul>
        <ul>Others</ul>
      </div>

      <div>
        {

          !user ? (
            <div  className="second">
              <Link to="/login"> <Button name="Login" /></Link>
              <Link to="/signup"> <Button name="Signup" /></Link>
            </div>
          ) : (
            <div  className="second">
            <Link to="/your-tickets"><Button name="Your Tickets"/></Link>
            <Link to="/"> <Button name="Profile" /></Link>
            <a onClick={unsetToken}><Button onClick={unsetToken} name="Logout" /></a> 
          </div>
          )


        }
        
      </div>
    </div>
  );
}
