import React from 'react';
import Navbar from '../components/Navbar';
import { getuser } from '../lib/getfunctions';
import Button from '../components/Button.jsx';

export default function userprofile() {
  const user_data = getuser();
  console.log(user_data);
  return (
    <div>
      <Navbar />

      <div className="userbox">
        <section className="Name">
          <h3>Name:</h3>
          <p>{user_data.username}</p>
        </section>

        <section className="email">
          <h3>Email</h3>
          <p>{user_data.email}</p>
        </section>

        <section className="mobile">
          <h3>Phone:</h3>
          <p>{user_data.id}</p>
        </section>
      </div>

      <Button name="Update information" />
      <br />
      <Button name="Delete Account" />
    </div>
  );
}
