import React, { useState } from 'react';

function Signup() {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handlePassword1Change = (e) => {
    setPassword1(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const signup = () => {
    if (password1 === password2) {
      // Passwords match, call the signup function with the password.
      alert('Signed in successfully!!')
      
    } else {
      // Passwords do not match, handle the error or show a message.
      console.error('Passwords do not match');
      alert('Passwords do not match')
    }
  };

  const performSignup = (password) => {
    // Here, you can perform your signup logic with the provided password.
    // This function is where you would send the password to your server for authentication or store it locally, as needed.
    console.log('Signing up with password:', password);
  };

  return (
    <div>
    <div style={{margin:"3em"}}>
     <input type='text' placeholder='username'/>
     </div>
    
     <div>
      <input style={{margin:"3em"}}
        type="password"
        className="p1"
        required
        placeholder="Enter Password"
        value={password1}
        onChange={handlePassword1Change}
      />
      </div>
      <input style={{margin:"3em"}}
        type="password"
        className="p2"
        required
        placeholder="Confirm Password"
        value={password2}
        onChange={handlePassword2Change}
      />
      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;
