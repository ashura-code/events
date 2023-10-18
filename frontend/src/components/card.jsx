import { Link } from 'react-router-dom';

export default function Card({ name, image, id }) {
  return (
    <Link to={`/event/${id}`} className='card'>
   
        <div className="image-container">
          <img src={`http://localhost:1337${image}`} alt="image" />
        </div>
        <h3>{name}</h3>

    </Link>
  );
}
