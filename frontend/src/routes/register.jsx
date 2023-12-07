import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { getevent } from '../lib/getevent';

export default function Register() {
  const [button_value, setButton_value] = useState('confirm your registration');
  const [sec_id,setSec_id] = useState([]);
  const [ex_msg,setEx_msg] = useState("");
  const [show_btn,setShow_btn] = useState(false)

  const { id } = useParams();
  const event_id = Number(id);
  const token = Cookies.get('jwt');
  const user_id = Number(Cookies.get('id'))


  

  const handleusers = async () => {
    // setButton_value("loading...")
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/api/users/me/?populate=*`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response.ok) {
      setEx_msg('');
      setButton_value("click to proceed")
    } else {
      setButton_value('an error occured , please try again after some time');
      setEx_msg('');
      setShow_btn(true)
    }

    if (response.ok) {
      const data = await response.json();
      setSec_id(data.id)
      let temp = '';

      if (data.Purchased === null) {
        data.Purchased = `[${event_id}]`;
        temp = data.Purchased;

      } else {
        let temp = JSON.parse(data.Purchased);
        const simiar_event = temp.find((ev_id) => ev_id === event_id);
        if (simiar_event) {
          setButton_value("already registered for the event")
          alert('already registed for the event');
          setShow_btn(true);
          setEx_msg('')
          return;
        } else {
          temp.push(event_id);
        }

        data.Purchased = JSON.stringify(temp);
      }

      let _temp = JSON.parse(data.Purchased);
      let small = _temp.map((n) => (n = n.toString()));
 

      const new_data = { ...data, event_data: small };

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token}`);

      var raw = JSON.stringify(new_data);

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      if(Number(sec_id) === Number(user_id)){

      fetch(`${import.meta.env.VITE_BACK_URL}/api/users/${user_id}/?populate=*`, requestOptions)
        .then((response) => console.log(response.text()))
        .then((result) =>  {
          console.log(result);
          setButton_value("successfully registered for the event")
          setShow_btn(true)
          
        })
        .catch((error) => console.log('error', error));
      }
        
    }
  };


  return (
    <div>
      <Navbar />

      <div className=' h-[80vh] w-[100%] flex flex-col justify-center items-center '>
      <span  className='flex h-[50vh] flex-col justify-center items-center border w-[50%] my-0 mx-auto border-black'>
        <p className="m-4 text-3xl">Confirming the registration</p>
        <button onClick={handleusers} className='mb-3'><Button name={button_value} /></button>
         {
          show_btn && (
             <Link to="/"><Button name="done"></Button></Link>
          )
         }
      </span> 
      <h1 className=' text-blue-600'>{ex_msg}</h1>
      </div>

    </div>
  );
}
