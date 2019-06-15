import React from 'react';
import { useState } from 'react';
import WeatherItem from './WeatherItem';
// import { Card } from 'antd';
function Weather() {
    // const [count, setCount] = useState(0);

    function tenDay() {
        let days = [];
        for (let i = 0; i < 11; i++) {
            days.push(<WeatherItem key={i}/>);
            console.log(days);
                        
        }
        // return days[0]
        return days.map(i=>{

            return i;
        })
    }

    return (
        // <WeatherItem />
        <div>
            {tenDay()}
        </div>
        
    );
    // let days = [];
    // for (let i = 0; i < 11; i++) {
    //     days.push(<WeatherItem />);
    //     console.log(days);

    // }

    // return days.map = (i) => {

    //     return days[i];
    // }
}

export default Weather;