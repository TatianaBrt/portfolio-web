import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import imageArrow from './arrow.png';
import { useState } from 'react';
import imageMenu3 from './menu3.png';



function App () {
  const[isOpen,setIsOpen]=useState();

  return <Router>
  
  <header className='headerNav'>
    <nav className={`navbar ${isOpen ? 'active' : " "}`}>
    <span className='arrow' onClick={()=>setIsOpen(!isOpen)}><img src={imageArrow} width="70px" alt="icon"/></span>
    <span className='logo'>WebDev</span>
    <Link to="/" className='Link linltxt'>HOME</Link>
    <Link to="/about" className='Link linltxt'>ABOUT</Link>
    <Link to="/skills" className='Link linltxt'>SKILLS</Link>
    <Link to="/portfolio" className='Link linltxt'>PORTFOLIO</Link>
    <Link  to="/contact" className='Link linltxt'>CONTACT</Link>
    </nav>
      <span className='btn' onClick={()=>setIsOpen(!isOpen)}><img src={imageMenu3} width="50px" alt="icon"/></span>
    </header>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  
<Footer/>
  </Router>
  
  }

export default App;
