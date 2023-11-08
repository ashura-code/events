import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';

export default function profile() {
  const user = Cookies.get('jwt');
  const [content, setContent] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${user}`);

  var reqoptions = {
    method: 'GET',
    headers: myHeaders,
  };

  useEffect(() => {
    fetch('http://localhost:1337/api/users/me', reqoptions)
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div>
      <Navbar />
      <h1>Welcome to profile</h1>


    <section><h1 style={{display:"inline"}}>Name:</h1><h3 style={{display:"inline"}}>{content.username}</h3></section>
    <section><h1 style={{display:"inline"}}>Email:</h1><h3 style={{display:"inline"}}>{content.email}</h3></section>
    
    </div>
  );
}
