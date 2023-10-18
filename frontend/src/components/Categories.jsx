import { useState, useEffect } from 'react';
import Card from './card.jsx';

export default function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/event-data/?populate=*')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        data.data.map((a) => {
          console.log(a.id);
        });
      });
  }, []);

  return (
    <div className="categories">
      <h2>All events</h2>
      <div className="card-section">
        {data.length > 0 ? (
          data.map((comp) => (
            <Card
              name={comp.attributes.Name}
              image={comp.attributes.Image.data.attributes.url}
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
