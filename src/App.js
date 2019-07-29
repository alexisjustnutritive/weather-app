import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Error from './components/Error'
import { Container, Row, Col } from 'react-bootstrap';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

    const [ queryWeather, setQueryWeather ] = useState( {} );
    const [weather, setWeather] = useState( {} );

    const getWeatherData = async () => {
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${ queryWeather.city },${ queryWeather.country }&appid=447a0a328f23d03a2f0f5df3918cf3a0&units=metric`;
        let res = await fetch( apiUrl );
        let data = await res.json();
        setWeather( data );
    }

    useEffect( () => {
        if ( Object.entries( queryWeather ).length > 0 ) {
            getWeatherData();
        }
    }, [ queryWeather ] );

    let weatherElement;
    if ( Object.entries( weather ).length > 0 ) {
        if ( weather.cod === '404' ) {
            weatherElement = ( <Error message={ weather.message } /> );
        } else {
            weatherElement = ( <Weather weather={ weather } /> ) ;
        }
    } 

  return (
    <Container className="bg-secondary container-page">
        <div className="header-container">
            <Header title={ 'Weather app' } />
        </div>
        <Row className="p-4">
            <Col xs={12} sm={6}>
                <Form setQueryWeather={ setQueryWeather } />
            </Col>
            <Col xs={12} sm={6}>
                { weatherElement }
            </Col>
        </Row>
    </Container>
  );
}

export default App;
