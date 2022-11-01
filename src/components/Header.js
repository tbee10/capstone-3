import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <>
    <header>
        <h1>Daily Buzz Sportsbook</h1>
    <div className="topnav">
  <Link to="/contact">Contact</Link>
  <Link to="/news">News</Link>
  <Link to="/login">Login</Link>
  <Link to="/home">Home</Link>
</div>
    </header>
    </>
  )
}

export default Header