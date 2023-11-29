import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';
import Button from '../components/Button';

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
    <div className='h-[80%]'>
      <Navbar />

      <div className='text-center border border-black w-[50%] h-[90%] my-0 mx-auto'>
        <h1 className='font-hls text-8xl font-bold my-10 mb-15'>Profile</h1>
        <div className='my-10'>
        <section className='text-5xl'><h1 className='inline font-semibold mr-4'>Name:</h1><h3 className='inline'>{content.username}</h3></section>
        <section className='text-5xl'><h1 className='inline font-semibold mr-4'>Mail:</h1><h3 className='inline'>{content.email}</h3></section>
        </div>
        <button className="text-white bg-[#242427] px-2 py-1  text-2xl rounded-md font-hls my-4 mx-auto">delete info</button>
      </div>
      
    </div>
  );
}
