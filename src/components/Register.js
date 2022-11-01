import axios from 'axios';
import React, { useState } from 'react'

const Register = (props) => {

const [name, setName] = useState('')
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

function saveRegister(e){
  console.log("hit")
  axios.post("/users", {
  name: name,
  email: email,
  password: password,})
  .then((res) => {
    console.log(res)
    console.log("hit2")
  })
  .catch((err) => {
    console.log(err)
  })
}

  return (
    <div className='auth-form-container'>
        <form className="register-form" onSubmit={saveRegister}>
        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder='Full Name'/>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='your email' id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' id="password" name="password"/>
        <button type="submit" id="register">Register</button>
    </form>
    <button onClick={() => props.onFormSwitch('SignIn')} id="switch">Already have an account? Log in here</button>
    </div>
  )
}

export default Register