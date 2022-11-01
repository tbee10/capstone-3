import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import News from './components/News';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path="home/" element={<Home />}/>
          <Route path="login/" element={<Login />}/>
          <Route path="news/" element={<News />}/>
          <Route path="contact/" element={<Contact />}/>
         </Routes>
  
      </div>  
    
      <Footer />
    </div>
    </Router>
  );
}

export default App;
