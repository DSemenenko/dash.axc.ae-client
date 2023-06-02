import { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import { io } from 'socket.io-client'

import Loop from './Components/Loop';

function App() {
  let logoItem = useRef(null)


  return (
    <div className="App">
      <div className='animate'>
          <Loop/>
      </div>
    </div>
  );
}

export default App;
