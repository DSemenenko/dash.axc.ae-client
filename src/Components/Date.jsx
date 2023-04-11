import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
const Date = () =>{
    const [currentDay, setcurrentDay] = useState(moment.tz('America/New_York'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setcurrentDay(moment());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);

    return <>
        <div className="date">
            <p>{currentDay.format('ddd MMM DD YYYY')}</p>
        </div>
        </>
}

export default Date;