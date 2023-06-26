// import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import React from "react";

/* components */

import {Routes , Route} from "react-router-dom";
import Home from './Home';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/channel" element={<Home/>} />
        <Route path="/video" element={<Home/>} />
      </Routes>
    </div>
  )
  
}


export default App;