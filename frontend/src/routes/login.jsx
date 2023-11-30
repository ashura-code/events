import React, { useState } from 'react';
import { setToken } from '../lib/auth';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Login() {
  const url = 'http://localhost:1337/api/auth/local';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error_msg,setError_msg] = useState('');

  const handlemailchange = (e) => {
    setEmail(e.target.value);
  };
  const handlepasswordchange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    console.log(response);

    if (response.ok) {
      console.log('successfully logged in!!');
      const data = await response.json();
      setToken(data);
    } else {
      alert('check your email or password again');
    }
  };

  return (
    <div className="h-screen w-[100%] flex justify-center items-center">
      <div className="login-box border border-black w-[40%]">
        <span className=" m-60">
          <h1 className="mt-[0.1em] text-[#242427] text-center m-2  text-6xl font-bold p-0">
            Events
          </h1>
          <p className="text-center text-3xl font-semibold m-4">
            login to your account
          </p>
          <p className="text-center">
            Don't have an account yet?{' '}
            <Link className=" underline" to="/signup">
              Signup
            </Link>
          </p>
        </span>

        <form onSubmit={handleLoginSubmit} className="flex flex-col w-[100%]">
          <input
            type="email"
            onChange={handlemailchange}
            required
            placeholder="jjon@example.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-[90%] text-left p-2.5 my-3"
          ></input>
          <input
            type="password"
            onChange={handlepasswordchange}
            required
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block my-0 mx-auto w-[90%] text-left p-2.5 mb-3"
          ></input>
          <button className="my-0 mx-auto text-center text-white bg-[#242427] px-2 py-1 mb-3  text-2xl rounded-md font-hls w-[90%]">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
