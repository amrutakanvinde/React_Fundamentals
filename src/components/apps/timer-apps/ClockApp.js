import React, { useState, useEffect } from 'react';

const getTimeString = (loc) => {

    // const date = new Date(Date.now()).toLocaleTimeString();
    const options = { timeZone: `America/${loc}`, timeZoneName: 'short' };
    const date = new Date(Date.now()).toLocaleTimeString('en-US', options);

    const arr = [date, options.timeZone];
    return arr;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString("Indianapolis"));
    const [time2, setTime2] = useState(getTimeString("Denver"));

    useEffect(() =>{
        const interval = setInterval(() => {
            let date = getTimeString("Indianapolis");
            let date2 = getTimeString("Denver");
            setTime(date);
            setTime2(date2);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <div>
                <h1>{time[1]}</h1>
                <p>{time[0]}</p>
            </div>
            <div>
                <h1>{time2[1]}</h1>
                <p>{time2[0]}</p>
            </div>

            
        </div>
    )
}

export default ClockApp;