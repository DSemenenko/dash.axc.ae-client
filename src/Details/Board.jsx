import React from "react";
import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { io } from 'socket.io-client' 
import { Bar } from 'react-chartjs-2';
//import data from '../Data/data.json'
import dealSvg from '../Assets/images/deal.svg'
import marketSvg from '../Assets/images/market.svg'
import leadSvg from '../Assets/images/lead.svg'
import dldSvg from '../Assets/images/dld.svg'
import Date from "../Components/Date";
//import Radar from "./Radar";
import Meter from "../Components/Meter"
import DoughnutComponent from "../Components/Doughnut"
//import DoughnutChart from "./Test"
//import Time from "./Time"
import Timing from "../Components/Timing"
const numeral = require('numeral');


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Board = () => {
    
    const socket = io("http://127.0.0.1:3000")
    const [chartData, setChartData] = useState({})
    const [board, setBoard] = useState([])

    
    useEffect(() => {
        try {
            socket.on("connect", () => {
                console.log('Socket connected')
            })
            
            socket.on("boardFetched", (data) => {
                setBoard(data);
            })
            

            socket.on("disconnect", () => {
                console.log("Disconnected from server!");
            });
        } catch (error) {
            throw error
        }
      }, [])
    
    
    let data = board[0]
    console.log(board)

   

    ChartJS.defaults.font.size = 32
    ChartJS.defaults.font.family = "Montserrat"
    

    if(!board[0]){
        return <>Loading...</>
      }

      var totalsales = numeral(data.meter).format('0,0.0000')
      totalsales = totalsales.substring(0, totalsales.length-5);
      
      var totallead = numeral(data.totallead).format('0,0.0000')
      totallead = totallead.substring(0, totallead.length-5);
      
      var dldSales = numeral(data.dldSales).format('0,0.0000')
      dldSales = dldSales.substring(0, dldSales.length-5);
  
      
      const meter = {'meter': data.meter, 'goal': data.metergoal}
    return <>
        <div className="container-fluid">
            <div className="height-board">
                <div className="card chartboard">
                    <div className="row">
                        <div className="d-none justify-content-between">
                            <div className="card-header">
                                <p>AX Capital</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mb-5">
                    <div className="col-md-4">
                        <div className="doughn">
                            <DoughnutComponent meter={meter} />
                        </div>
                    </div>
                    <Timing/>
                </div>
                    <div className="row">
                        <div className="col-md-6 d-none">
                            <div className="card-body">
                                {
                                    chartData && chartData?.datasets && (
                                        <Bar 
                                            options={
                                                {
                                                    responsive: true,
                                                    plugins: {
                                                        legend: {
                                                        position: 'top',
                                                        },
                                                        title: {
                                                        display: true,
                                                        text: 'Chart.js Bar Chart',
                                                        },
                                                    },
                                                }
                                            } 
                                            data={chartData} />
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="grid-chart">
                                <div className="chart-item">
                                    <div className="card-header">
                                        Total DEALS this month
                                    </div>
                                    <div className="card-body">
                                        <div className="img-card">
                                            <img src={dealSvg} alt="" />
                                        </div>
                                        <p>{data.totaldeals}</p>
                                        <div className="content">
                                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="chart-item">
                                    <div className="card-header">Total SALES this month</div>
                                    <div className="card-body">
                                        <div className="img-card">
                                            <img src={dldSvg} alt="" />
                                        </div>
                                        <p>{totalsales}</p>
                                        <div className="content">
                                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart-item">
                                    <div className="card-header">MARKET SHARE/GOAL - 25%</div>
                                    <div className="card-body">
                                        <div className="img-card">
                                            <img src={marketSvg} alt="" />
                                        </div>
                                        <p>{data.marketshare}%</p>
                                        <div className="content">
                                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart-item">
                                    <div className="card-header">Total LEAD so far</div>
                                    <div className="card-body">
                                        <div className="img-card">
                                            <img src={leadSvg} alt="" />
                                        </div>
                                        <p>{totallead}</p>
                                        <div className="content">
                                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart-item">
                                    <div className="card-header">DLD Transactions, February 2023</div>
                                    <div className="card-body">
                                        <div className="img-card">
                                            <img src={dldSvg} alt="" />
                                        </div>
                                        <p>{data.dldTrans}</p>
                                        <div className="content">
                                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chart-item">
                                    <div className="card-header">DLD Sales (AED),February,2023</div>
                                    <div className="card-body">
                                        <div className="img-card">
                                            <img src={dldSvg} alt="" />
                                        </div>
                                        <p>{dldSales}</p>
                                        <div className="content">
                                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Board;