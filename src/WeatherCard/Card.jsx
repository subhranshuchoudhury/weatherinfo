// Weather Card
import React from 'react';
import './card.css'

const Card = (props) => {
    let background = { "backgroundColor": "red" };
    const d = props.apiData;
    if (d.temp < 20) {
        background = { "backgroundColor": "#54BAB9" }
    } else if (d.temp > 20 && d.temp < 35) {
        background = { "backgroundColor": "#377D71" }
    } else if (d.temp > 36) {
        background = { "backgroundColor": "#FF9F29" }
    }
    return (
        <div style={background} className='cardContainer'>
            <div className='rowOne'>
                <p className='tempDisplay'>
                    {d.temp} &#8451;
                </p>
                <hr></hr>
                <br></br>
                <p className='cityName'>{d.name}, {d.country}</p>
                <br></br><br></br>
                <p className='wMood'>{d.weatherMood}</p>
                <p className='wDesc'>{d.description}</p>
                <p className='otherinfo'>Humidity: {d.humidity} <br></br> Wind Speed: {d.speed}km/hr</p>
            </div>

        </div>
    );
}

export default Card;
