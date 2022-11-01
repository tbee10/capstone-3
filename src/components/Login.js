import React, { useState } from 'react'
import SignIn from './SignIn';
import Register from './Register'


const Login = () =>{

  const [currentForm, setCurrentForm] = useState('SignIn');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <p>
        Log in or create an account
      </p>
      {
        currentForm === "SignIn" ? <SignIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

    </div>
  );
}

export default Login