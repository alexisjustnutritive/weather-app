import React from 'react';
import WeatherImg from './WeatherImg';

const Weather = ( { weather } ) => {

    let iconUrl = `https://openweathermap.org/img/wn/${ weather.weather[ 0 ].icon }@2x.png`;
    console.log( iconUrl );
    return (
        <div className="card shadow" style={{ position: 'relative' }}>
            <div className="card-body text-capitalize">
                {/* <h4 className="card-title text-center" style={{ marginBottom: '1.5rem' }}>{ weather.name }, { weather.sys.country }</h4> */}
                <div className="header-container d-flex justify-content-between align-items-center">
                    <h1 className="card-title">{ weather.main.temp }<span> &#8457;</span></h1>
                    <img className="img-fluid card-title pl-4" src={ iconUrl } alt={ weather.weather[0].description } style={{ width: '80px' }} />
                </div>
                <p className="card-title">weather: <strong>{ weather.weather[0].description }</strong></p>
                <p className="card-title">max. temperature: { weather.main.temp_max }<span> &#8457;</span></p>
                <p className="card-title">min. temperature: { weather.main.temp_min }<span> &#8457;</span></p>
                <p className="card-title">humidity: { weather.main.humidity }%</p>
                <p className="card-title">wind: { weather.main.temp_max } m/s</p>
            </div>
            <WeatherImg />
        </div>
    )
}

export default Weather;