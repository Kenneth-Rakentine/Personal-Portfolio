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
import HeadBar from './components/HeadBar';
import Footer from './components/Footer';
import LowerGradient from './components/LowerGradient';

function App() {


  return (
    <div className="App">
      <div className='masterContainer'>
        <HeadBar/>
        <BoxLogo/>
        <Links/>
      
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
      {/* <LowerGradient/> */}
      <Footer/>
      {/* <img classname='hurricaneGif'  src='https://i.gifer.com/FpO7.gif'/> */}
      {/* <img className='collageImg' src='https://i.ibb.co/55gLGzf/37Wseut.jpg'/> */}
      
    </div>
  );
}

export default App;
