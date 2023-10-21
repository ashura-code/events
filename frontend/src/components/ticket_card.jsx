import React from 'react'
import {useState,useEffect} from "react"
import "../styles/ticket_card.css"

export default function ticket_card({id}) {

    const url = "http://localhost:1337"

    const [info,setInfo] = useState([]);

    useEffect(()=>{
        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:1337/api/event-data/${id}/?populate=*`, requestOptions)
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
    <div className="main-box">
    {/* Access info.data only when it's available */}
    {info.data ? (
        <section style={{display:"flex"}} className='sub-box'>
       <div><img src={`${url}${info.data.attributes.Image.data.attributes.url}`} width={300} height={200} /></div> 

        <div className='info-area'>
        {/* {info.data.id} */}
        <h1 className='name'>{info.data.attributes.Name}</h1>
        <p className='organization'>{info.data.attributes.Organizer}</p>
        <p className='description'>{info.data.attributes.Description}</p>
        <p className='ticket-number'>{`Ticket number: ${Math.floor(Math.random() * 100)}`}</p>

        </div>
        
        </section>
        ) : <h1>Loading...</h1>}
  </div>
  )
}
