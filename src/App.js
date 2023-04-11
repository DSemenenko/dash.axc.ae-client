import { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import { io } from 'socket.io-client'

import Loop from './Components/Loop';
import { TweenMax, Power3, gsap, Power4, Circ } from 'gsap';

function App() {
  let logoItem = useRef(null)


//   useEffect(() => {
//     //console.log(logoItem)
//     // logoItem.style.display = 'none'
//     TweenMax.to(
//       logoItem,
//       .9,
//       {
//         opacity: 1,
//         y: -20,
//         easy: Power3.easeOut
//       }
//     )
//   }, [])
//  ref={el => {logoItem = el}}

useEffect(() => {
  const tl = gsap.timeline();

  tl.to(".line",{
    width: "0%",
    duration: 1,
    delay: 0.1,
    ease: Power4.easeInOut
  })
  .to("h1",{
    y: 100,
    duration: 1,
    delay: -0.5,
    opacity: 1,
    ease: Power4.easeInOut
  })
  .to(".loader",{
    height: 0,
    top: "100%",
    duration: 0.8,
    delay: -0.6,
    ease: Circ.easeInOut
  })
  .to("h2",{
    y: 0,
    duration: 0.8,
    delay: -0.6,
    ease: Power3.easeInOut
  });
}, []);



  return (
    <div className="App">
      <div className='animate'>
          <Loop/>
        {/* <div id="main-container">
          <div className="loader">
            <span className="text">
              <h1>AX Capital</h1>
            </span>
            <span className="line-container">
              <span className="line"></span>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
