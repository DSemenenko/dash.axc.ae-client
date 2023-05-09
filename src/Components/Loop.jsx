import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { io } from 'socket.io-client' 
import {PageOne, 
  PageTwo, 
  PageThree, 
  PageFour, 
  PageFive, 
  PageSix, 
  PageBoard, 
  PageLists, 
  PageDealDay, 
  Top3TotalSalesValueOffPlanPage, 
  Top3TotalSalesValueSecondaryPage, 
  RisingStarsOffPlanTeamSecondaryPage,
  MostValuableManagerOffPlanSecondaryPage,
  OutstandingContributionSupportPage,
  OutstandingContributionSupport2Page,
  HighestTotalRentalValueSecondaryPage,
  MostRentalTransactionsSecondaryPage,
  ListingMVPSecondaryPage,
  PromotionsPage
  } from './Pages'
import Header from '../Components/Header'

import { TweenMax, Power3 } from 'gsap';

const socket = io("https://dash.axc.ae/")  
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
      } else if (location.pathname === '/7') {
        navigateAndReload('/8');
      } else if (location.pathname === '/8') {
        navigateAndReload('/9');
      } else if (location.pathname === '/9') {
        navigateAndReload('/11');
      } else if (location.pathname === '/11') {
        navigateAndReload('/12');
      } else if (location.pathname === '/12') {
        navigateAndReload('/13');
      } else if (location.pathname === '/13') {
        navigateAndReload('/14');
      } else {
        navigateAndReload('/1');
      }
    }, 23000);

    
  
    if(!sales[0]){
      return <><div style={{color: "#000"}}>Loading...</div></>
    }
    
  
    return (
      <>
      <Routes>
        <Route exact path="/1" element={<PageOne props={sales[0]} />} />
        <Route exact path="/3" element={<PageTwo props={sales[1]}  />} />
        <Route exact path="/5" element={<PageThree props={sales[2]} />} />
        <Route exact path="/7" element={<PageFour props={sales[3]} />} />
        <Route exact path="/9" element={<PageFive props={sales[4]} />} />
        <Route exact path="/11" element={<PageSix props={sales[5]} />} />
        <Route exact path="/13" element={<PageBoard/>} />
        {/* <Route exact path="/8" element={<PageLists/>} /> */}
        <Route exact path="/15" element={<PageDealDay/>} />



        <Route exact path="/2" element={<Top3TotalSalesValueSecondaryPage/>} />
        <Route exact path="/4" element={<RisingStarsOffPlanTeamSecondaryPage/>} />
        <Route exact path="/6" element={<MostValuableManagerOffPlanSecondaryPage/>} />
        <Route exact path="/8" element={<HighestTotalRentalValueSecondaryPage/>} />
        <Route exact path="/10" element={<ListingMVPSecondaryPage/>} />
        <Route exact path="/12" element={<PromotionsPage/>} />
        <Route exact path="/14" element={<OutstandingContributionSupportPage/>} />
        <Route exact path="/16" element={<OutstandingContributionSupport2Page/>} />
      </Routes>
      </>
    );
  };
  
export default Loop;