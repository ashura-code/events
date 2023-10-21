import { useParams,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';
import Button from  "../components/Button";


export default function EventPage() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [Name, setName] = useState([]);
  const [Venue, setVenue] = useState([]);
  const [Organizer, setOrganizer] = useState([]);
  const [Description, setDescription] = useState([]);
  const [Totalseats, setTotalseats] = useState([]);
  const [Price, setPrice] = useState([]);
  const [Image, setImage] = useState([]);
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/api/event-data/${id}/?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setData([res.data]);
        setName(res.data.attributes.Name);
        setVenue(res.data.attributes.Venue);
        setOrganizer(res.data.attributes.Organizer);
        setDescription(res.data.attributes.Description);
        setTotalseats(res.data.attributes.Total_Seats);
        setPrice(res.data.attributes.Price);
        setImage(res.data.attributes.Image.data.attributes.url);
        res.data.attributes.Category.data.map((category) => {
          setCategory(...Category, category.attributes.Title);
        });
      });
  }, []);

  

  return <div>

    <Navbar/>
  {
    data.length > 0 ? 

    (
      <div>
        <h1>{Name}</h1>
      <p><b>Venue:</b> {Venue}</p>
      <p><b>Organizer:</b> {Organizer}</p>
      <p><b>Description:</b> {Description}</p>
      <p><b>Total Seats:</b> {Totalseats}</p>
      <p><b>Price:</b> {Price}</p>
        <img src={`http://localhost:1337${Image}`} style={{
          height:"400px",width:"800px"
        }}/>


        { 
         Cookies.get('username') ? (<Link to={`register`}><Button name="register"/></Link>) : (<Link to="/signup"> <Button name="Sign in or Log in to register"/> </Link>)


         }

      </div>

      
    )
    : <h1>Loading</h1>
  }
    </div>;
}
