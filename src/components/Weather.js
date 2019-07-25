import React from 'react';

const Weather = ( { weather } ) => {
    console.log( weather );

    let iconUrl = `https://openweathermap.org/img/wn/${ weather.weather[ 0 ].icon }@2x.png`;
    console.log( iconUrl );
    return (
        <div className="card">
            <div className="card-body text-capitalize">
                <div className="header-container d-flex justify-content-start align-items-end">
                    <img className="img-fluid" src={ iconUrl } alt={ weather.weather[0].description } />
                    <h4 className="card-title" style={{ marginBottom: '1.5rem' }}>{ weather.name }, { weather.sys.country }</h4>
                </div>
                <p className="card-title">humidity: { weather.main.humidity }%</p>
                <p className="card-title">temperature: { weather.main.temp }°C</p>
                <p className="card-title">min. temperature: { weather.main.temp_min }°C</p>
                <p className="card-title">max. temperature: { weather.main.temp_max }°C</p>
                <p className="card-title">wind: { weather.main.temp_max } m/s</p>
                <p className="card-text">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
                </p>
                <a href="#!" className="btn">Go somewhere</a>
            </div>
        </div>
    )
}

export default Weather;