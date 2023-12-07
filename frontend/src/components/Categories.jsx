import { useState, useEffect } from 'react';
import Card from './card.jsx';

export default function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACK_URL}/api/event-data/?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <div className="categories px-6 mt-24 mb-24">
      <h2 className='text-3xl text-[#242427] font-semibold mb-4'>All events</h2>
      <div className="card-section flex flex-wrap gap-5">
        {data.length > 0 ? (
          data.map((comp) => (
            <Card
              name={comp.attributes.Name}
              image={comp.attributes.Image.data.attributes.url}
              desc ={comp.attributes.Description}
              id={comp.id}
              
            />
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}
