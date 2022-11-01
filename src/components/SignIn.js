import axios from 'axios';
import React, { useState } from 'react'


const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
      axios.post("/users", {email, password})
      .then((res) => {
        console.log(res.data)
        event.preventDefault();
      })
        .catch((err) => {
          console.log(err)

        })
    }

  return (
    <div className='auth-form-container'>
    <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='your email' id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' id="password" name="password"/>
        <button type="submit" id="log-in">Log In</button>
    </form>
    <button onClick={() => props.onFormSwitch('register')} id="switch">Don't have an account? Register here</button>

    </div>
  )
}

export default SignIn