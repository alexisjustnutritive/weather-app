import React, { useState, useEffect } from 'react'
import AutoCompleteResult from './AutoCompleteResult';
import citiesJson from '../../node_modules/cities.json/cities.json';
import './form.css';

const Form = ( { setQueryWeather } ) => {
    // states
    const [ selectedCity, setSelectedCity ] = useState( {} );
    const [ typevalue, setTypevalue ] = useState( '' );
    const [ inputValue, setInputValue ] = useState( '' );
    const [ cities, setCities ] = useState( [] );
    const [disable, setDisable] = useState( true );

    // useEffects
    useEffect(() => {
        if ( Object.entries( selectedCity ).length > 0 ) {
            let text = selectedCity.city + ' ,' + selectedCity.country;
            setInputValue( text );
            setDisable( false );
            setCities( [] );
        }
    }, [ selectedCity ]);

    // functions
    const onChange = e => {
        let value = e.target.value;
        setTypevalue( value );
        setInputValue( value );
        setDisable( true );

        if ( value.length >= 3 ) {
            let citiesSearchResult = citiesJson.filter( city => {
                let cityName = city.name.toLowerCase();
                return cityName.indexOf( value.toLowerCase() ) !== -1; 
            });
            citiesSearchResult = citiesSearchResult.slice( 0, 10 );
            setCities( citiesSearchResult );
        } else {
            setCities( [] );
            setSelectedCity( {} );
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        setQueryWeather( selectedCity );
    }

    return (
        <form onSubmit={ onSubmit }>
            { disable ? <p style={{ fontSize: '0.8rem' }} className="text-danger mb-1">*type at least 3 characters and select from list</p> : null }
            <div className="form-container d-flex justify-content-center align-items-end">
            <div style={{ position: 'relative' }}>
                <input 
                    type="text" 
                    className="form-control shadow" 
                    id="city-input" 
                    placeholder="type the city name..."                    
                    name="city"
                    autoComplete="off"
                    value={ inputValue }
                    onChange={ onChange }
                />
                { typevalue.length >= 3 ? <AutoCompleteResult cities={ cities } setSelectedCity={ setSelectedCity } /> : null }
            </div>
                <input type="submit" value="Search" className="btn btn-info ml-2 shadow text-white" disabled={ disable } />
            </div>
        </form>
    )
}

export default Form;
