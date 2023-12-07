import React from 'react'
import {useState,useEffect} from "react"
// import "../styles/ticket_card.css"

export default function ticket_card({id}) {

    const url = import.meta.env.VITE_BACK_URL

    const [info,setInfo] = useState([]);

    useEffect(()=>{
        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${url}/api/event-data/${id}/?populate=*`, requestOptions)
            .then(response => response.json())
            .then(result => { 
                  setInfo(result)
            })
            .catch(error => console.log('error', error));
         
    },[id])

    
    if(info.data){ 
         console.log(info.data.attributes)
         console.log(`${url}${info.data.attributes.Image.data.attributes.url}`)
    }


    // const common_chain = info.data.attributes;
    


  return (
    <div className="main-box w-[80%]">
    {/* Access info.data only when it's available */}
    {info.data ? (
        <section  className='sub-box flex  border border-black'>
       <div><img src={`${url}${info.data.attributes.Image.data.attributes.url}`} className='w-[300px] h-[200px] px-2 py-2' /></div> 

        <div className='info-area py-4'>
        {/* {info.data.id} */}
        <h1 className='name text-3xl font-semibold '>{info.data.attributes.Name}</h1>
        <p className='date'>{info.data.attributes.Date}</p>
        <p className='organization'><span>organized by </span><span className=' font-semibold'>{info.data.attributes.Organizer}</span></p>
        <p className='ticket-number'>{`Ticket number: ${Math.floor(Math.random() * 100)}`}</p>

        </div>
        
        </section>
        ) : <h1>Loading...</h1>}
  </div>
  )
}
