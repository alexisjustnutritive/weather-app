import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Error from './components/Error'
import { Container, Row, Col } from 'react-bootstrap';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

    const [query, setQuery] = useState(
        {
            city: '',
            country: '',
        }
    );
    const [ error, setError ] = useState( false );
    const [weather, setWeather] = useState( {} );
    
    useEffect( () => {
        if ( !error && query.city !== '' ) {
            getWeatherData();
        }
    }, [ query ] );

    const getWeather = data => {
        if ( data.city === '' || data.country === '' ) {
            setError( true );
        } else {
            setError( false );
        }

        setQuery( {
            city: data.city,
            country: data.country
        } );
    }

    let weatherElement;
    if ( Object.entries( weather ).length > 0 ) {
        if ( weather.cod === '404' ) {
            weatherElement = ( <Error message={ weather.message } /> );
        } else {
            weatherElement = ( <Weather weather={ weather } /> ) ;
        }
    } 

    const getWeatherData = async () => {
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${ query.city },${ query.country }&appid=447a0a328f23d03a2f0f5df3918cf3a0&units=metric`;
        let res = await fetch( apiUrl );
        let data = await res.json();
        setWeather( data );
    }
    
  return (
    <Container className="bg-secondary p-0">
        <Header title={ 'Weather app' } />
        <Row className="p-4">
            <Col xs={12} sm={6}>
                <Form getWeather={ getWeather }/>
                { error ? <Error message="*All field are required" /> : null }
            </Col>
            <Col xs={12} sm={6}>
                { weatherElement }
            </Col>
        </Row>
    </Container>
  );
}

export default App;
