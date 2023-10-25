import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Button from '../components/Button';

export default function Register() {
  const [button_value, setButton_value] = useState('confirm your registration');

  const { id } = useParams();
  const event_id = Number(id);
  const token = Cookies.get('jwt');

  const handleusers = async () => {
    setButton_value("loading...")
    const response = await fetch(
      'http://localhost:1337/api/users/me/?populate=*',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response.ok) {
      setButton_value('confirming your registration');
    } else {
      setButton_value('an error occured , please try again after some time');
    }

    if (response.ok) {
      const data = await response.json();
      let temp = '';

      if (data.Purchased === null) {
        data.Purchased = `[${event_id}]`;
        temp = data.Purchased;
      } else {
        let temp = JSON.parse(data.Purchased);
        const simiar_event = temp.find((ev_id) => ev_id === event_id);
        if (simiar_event) {
          alert('already registed for the event');
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

      fetch('http://localhost:1337/api/users/12/?populate=*', requestOptions)
        .then((response) => console.log(response.text()))
        .then((result) =>  {
          console.log("starter pokemon")
          console.log(result);
          setButton_value("successfully registered for the event")
        })
        .catch((error) => console.log('error', error));
    }
  };


  return (
    <div>
      <Navbar />
      <span onClick={handleusers}>
        <Button name={button_value} />
      </span>
    </div>
  );
}