import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Name from './components/Name';
import Logo from './pages/Logo';
import BoxLogo from './components/BoxLogo';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ParallaxFX from './components/ParallaxFX';
import { Parallax } from 'react-scroll-parallax';
import Links from './pages/Links';

function App() {


  return (
    <div className="App">
      <div className='masterContainer'>
      <BoxLogo/>
        <Nav />
        <Name />
        {/* <Logo/> */}
        
       
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/project" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/links" element={<Links/>}/>
         </Routes>
      </div>
      <ParallaxFX/>
      {/* <img className='collageImg' src='https://i.ibb.co/55gLGzf/37Wseut.jpg'/> */}
    </div>
  );
}

export default App;
