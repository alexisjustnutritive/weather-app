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
    const [weather, setWeather] = useState();
    
    useEffect( () => {
        if ( !error && query.city !== '' ) {
            getWeatherData();
        }
    }, [ query ] );

    const getWeather = weather => {
        console.log( weather );
        
        if ( weather.city === '' || weather.country === '' ) {
            setError( true );
        } else {
            setError( false );
        }

        setQuery( {
            city: weather.city,
            country: weather.country
        } );
    }

    const getWeatherData = async () => {
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${ query.city },${ query.country }&appid=447a0a328f23d03a2f0f5df3918cf3a0`;

        let res = await fetch( apiUrl );
        let data = await res.json();
        console.log( data );
        setWeather( data );
    }
    
  return (
    <Container className="bg-secondary">
        <Header title={ 'Weather app' } />
        <Row className="p-4">
            <Col xs={12} sm={6}>
                <Form getWeather={ getWeather }/>
                { error ? <Error message="*All field are required" /> : null }
            </Col>
            <Col xs={12} sm={6}>
                { weather ? <Weather weather={ weather } /> : null }
            </Col>
        </Row>
    </Container>
  );
}

export default App;
