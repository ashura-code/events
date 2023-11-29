import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { getevents } from '../lib/getevents';
import levenshtein from "js-levenshtein";
import Card from '../components/card';


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
            // console.log(name)
            // console.log(ans)
            newArray.push({n,ans})
            setResult(newArray)

        })
     }

},[wow])

// console.log(result)
const sortedResult = result.slice().sort((a, b) => a.ans - b.ans);
// console.log(sortedResult)


sortedResult.forEach((comp)=>{ 
     console.log(comp.n.attributes.Name)
     console.log(comp.n.attributes.Image.data.attributes.url)
})




  


//   console.log(levenshtein('sitting', 'sitting'))


  

  return (
    <div>
      <Navbar />
     <div className='px-6'>
       <h1 className=" text-5xl font-semibold mb-11">Results for <span className='font-bold'>"{value}"</span></h1>

       {
        sortedResult.length > 0 ? (<div className="card-section flex flex-wrap gap-4">
            {
                sortedResult.map((comp)=>(
                    <Card
                    name={comp.n.attributes.Name}
                    image={comp.n.attributes.Image.data.attributes.url}
                    id={comp.n.id}
                    desc={comp.n.attributes.Description}
                  />
                ))
            }

        </div>): <h1>Event not available</h1>
       }

      </div>


     
      
    </div>
  );
}
