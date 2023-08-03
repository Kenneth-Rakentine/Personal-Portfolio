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
import { Parallax } from 'react-scroll-parallax';

function App() {


  return (
    <div className="App">
      <div className='masterContainer'>
      <BoxLogo/>
        <Nav />
        <Name />
        {/* <Logo/> */}
        <Parallax/>
       
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/project" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </div>
      <img className='collageImg' src='https://i.ibb.co/55gLGzf/37Wseut.jpg'/>
    </div>
  );
}

export default App;
