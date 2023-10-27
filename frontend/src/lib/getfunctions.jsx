import { useEffect, useState } from 'react';
import Cookies from "js-cookie"

const url = 'http://localhost:1337';
const events_cmd = '/api/event-data/?populate=*';

export function getevents() {
    const [datas, setDatas] = useState("");

    useEffect(() => {
    fetch(url + events_cmd)
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));

    }, []);

  return datas.data;

}



export function getuser(){ 
   const [datas,setDatas] = useState(""); 

   const token = Cookies.get('jwt');
   console.log(token)
   
   
   useEffect(()=>{
    var Myheaders = new Headers();
    Myheaders.append("Authorization",`Bearer ${token}`)

    var requestOptions = { 
       method:"GET",
       headers:Myheaders,
       redirect:'follow'
    }

    fetch(url+`/api/users/me`,requestOptions)
    .then(res => res.json())
    .then(data => setDatas(data))
    .catch(err => console.log(err))

   },[]);

   return datas;
    
}


