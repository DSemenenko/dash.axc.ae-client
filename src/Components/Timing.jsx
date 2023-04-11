import React from 'react';
import moment from 'moment-timezone';
import { useState, useEffect } from "react";
// import moment from 'moment-timezone';

const Timing = (props) => {
    const [today, setToday] = useState(moment());
    const [LondonTime, setLondonTime] = useState(moment.tz('Europe/London'));
    const [MoscowTime, setMoscowTime] = useState(moment.tz('Europe/Moscow'));
    const [NewYorkTime, setNewYorkTime] = useState(moment.tz('America/New_York'));

    useEffect(() => {
        const intervalId = setInterval(() => {
          setToday(moment());
          setLondonTime(moment.tz('Europe/London'));
          setMoscowTime(moment.tz('Europe/Moscow'));
          setNewYorkTime(moment.tz('America/New_York'));
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);

    //console.log(today)

    return (
    <>
    
        <div className="col-md-2">
                    <div className="clock-item"> {/* clock-item uae */}
                        <div className="text-center">
                            <h3>{today.format('ddd MMM DD YYYY')}</h3>
                            <p className='timing'>{today.format('LT')}</p>
                        </div>
                        <h3>Dubai</h3>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="clock-item">
                        <div className="text-center">
                                <h3>{LondonTime.format('ddd MMM DD YYYY')}</h3>
                                <p className="timing">{LondonTime.format('LT')}</p>
                        </div>
                        <h3>LONDON</h3>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="clock-item">
                        <div className="text-center">
                                <h3>{MoscowTime.format('ddd MMM DD YYYY')}</h3>
                                <p className="timing">{MoscowTime.format('LT')}</p>
                        </div>
                        <h3>MOSCOW</h3>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="clock-item">
                        <div className="text-center">
                                <h3>{NewYorkTime.format('ddd MMM DD YYYY')}</h3>
                                <p className="timing">{NewYorkTime.format('LT')}</p>
                        </div>
                        <h3>NEW YORK</h3>
                    </div>
                </div>
         
    </>
    )
}


export default Timing;