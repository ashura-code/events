import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import Ticket_card from "../components/ticket_card.jsx"


export default function Tickets() {
  const Token = Cookies.get('jwt');
  const [registed_events_id, setEventId] = useState("");

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${Token}`);

    const request = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`${import.meta.env.VITE_BACK_URL}/api/users/me`, request)
      .then((res) => res.json())
      .then((data) => {

        // console.log(data.Purchased);
        console.log()
        let temp = (data.Purchased.replace("[",''))
        temp = temp.replace("]",''); 
        temp = temp.split(",")
        setEventId(temp)

      })
      .catch((error) => console.log(error));


     
    

    //  return () => {
    //    // cleanup function second
    //  }
  }, []);


  return (
    <div>
        <Navbar />
      <h1 className=' pl-6 font-semibold text-5xl'>Your Tickets</h1>

      {registed_events_id.length > 0 ? (
        <div className='flex flex-col items-center w-[90%] mt-40 mx-auto gap-5'>
          {registed_events_id.map((id) =>  (
           
           <Ticket_card key={( Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100))} id={id}/>
          ))}
        </div>
        
      ) : (
        <h1 className='text-center mt-20'>You don't have any tickets</h1>
      )}   

      
      
    </div>
  );
}
