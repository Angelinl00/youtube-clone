// import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import React from "react";

/* components */

import {Routes , Route} from "react-router-dom";
import Home from './Home';
import Channel from './Channel';
import Show from './Show';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/channel/:id" element={<Channel/>} />
        <Route path="/video/:id" element={<Show/>} />
      </Routes>
    </div>
  )
  
}


export default App;