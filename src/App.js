import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Name from './components/Name';
import Logo from './pages/Logo';
import BoxLogo from './components/BoxLogo';
import Projects from './pages/Projects';

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
          
        </Routes>
      </div>

    </div>
  );
}

export default App;
