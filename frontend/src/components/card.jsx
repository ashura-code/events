import { Link } from 'react-router-dom';

export default function Card({ name, image,desc, id }) {
  return (
    <Link to={`/event/${id}`} className='flex flex-col w-96 bg-white border border-gray-200 rounded-lg  shadow '>

        <div className="image-container">
          <img className='rounded-t-lg h-48 w-[100%]' src={`http://localhost:1337${image}`} alt="image" />
        </div>
        <span className=' h-48 p-5'>
        <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900  '>{name}</h3>
        <p class="mb-3 font-normal text-gray-700">{desc}</p>
        </span>

    </Link>
  );
}
