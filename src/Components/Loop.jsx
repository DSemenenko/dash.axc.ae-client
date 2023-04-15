import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { io } from 'socket.io-client' 
import {PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix, PageBoard} from './Pages'
import Header from '../Components/Header'

import { TweenMax, Power3 } from 'gsap';

const socket = io("http://127.0.0.1:3000")
const Loop = () => {
    const [boardData, setBoard] = useState([])
    const[sales, setSales] = useState([null])
    const [listings, setlistData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
  
    const salesRef = useRef([]);
    
    
    // useEffect(() => {
      
    //   // socket.on('data', (data) => {
    //   //   console.log('data')
    //   // })
    // })
  
    // socket.on("connect", () => {
    //   console.log("connected")
    // })

    // socket.on('data', (data) => {
    //   console.log(data)
    // })

    // socket.on("disconnect", () => {
    //   console.log('disconnected', socket.id); // undefined
    // });
     
    useEffect(() => {
      socket.on('connect', () => {
        console.log('Client connected')
      })
      socket.on('salesFetched', (data) => {
        setSales(data)
      })
      socket.on("disconnect", () => {
        console.log(socket.id); // undefined
      });
    }, [])

      console.log(sales)
    const navigate = useNavigate()
    const location = useLocation()

    const navigateAndReload = async (path) => {
      window.location.replace(path)
    }
    
    // useEffect(() => {
    
  
    // }, 5000000);

    setInterval(() => {
        if (location.pathname === '/1') {
        navigateAndReload('/2');
      } else if (location.pathname === '/2') {
        navigateAndReload('/3');
      } else if (location.pathname === '/3') {
        navigateAndReload('/4');
      } else if (location.pathname === '/4') {
        navigateAndReload('/5');
      } else if (location.pathname === '/5') {
        navigateAndReload('/6');
      } else if (location.pathname === '/6') {
        navigateAndReload('/7');
      } else {
        navigateAndReload('/1');
      }
    }, 20000);

    
  
    if(!sales[0]){
      return <>Loading...</>
    }
    
  
    return (
      <>
      <Routes>
        <Route exact path="/1" element={<PageOne props={sales[0]} />} />
        <Route exact path="/2" element={<PageTwo props={sales[1]}  />} />
        <Route exact path="/3" element={<PageThree props={sales[2]} />} />
        <Route exact path="/4" element={<PageFour props={sales[3]} />} />
        <Route exact path="/5" element={<PageFive props={sales[4]} />} />
        <Route exact path="/6" element={<PageSix props={sales[5]} />} />
        <Route exact path="/7" element={<PageBoard/>} />
      </Routes>
      </>
    );
  };
  
export default Loop;