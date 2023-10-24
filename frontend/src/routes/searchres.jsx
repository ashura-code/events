import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { getevents } from '../lib/getevents';
import levenshtein from "js-levenshtein";


export default function searchres() {
  const [result,setResult] = useState([])
  const {id} = useParams();
  const value = id.toLowerCase();
  const wow  = getevents();

useEffect(() => {
    if(Array.isArray(wow)){  
        const newArray = [];
        wow.map((n) => { 
            let name = n.attributes.Name.toLowerCase();
            let id = n.id;
            let levenshtein_value = levenshtein(value,name);
            if (name.includes(value)){
                levenshtein_value = levenshtein_value - 50;
            }
            let ans = levenshtein_value
            console.log(name)
            console.log(ans)
            newArray.push({id,ans})
            setResult(newArray)

        })
     }

},[wow])

console.log(result)



  


//   console.log(levenshtein('sitting', 'sitting'))


  

  return (
    <div>
      <Navbar />
      <h1>Results for "{value}"</h1>


     
      
    </div>
  );
}
