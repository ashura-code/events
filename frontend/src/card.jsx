


export default function Card({name , image}) {


  return (
   
     <div className="card">  

       <div className="image-container">
       <img src={`http://localhost:1337${image}`} alt="image" />
       </div>
       <h3>{name}</h3>

     </div>
    
  )
}
