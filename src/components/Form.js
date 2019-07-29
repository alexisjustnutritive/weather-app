import React, { useState, useEffect } from 'react'
import AutoCompleteResult from './AutoCompleteResult';
import citiesJson from '../../node_modules/cities.json/cities.json';

const Form = ( { setQueryWeather } ) => {
    // states
    const [ selectedCity, setSelectedCity ] = useState( {} );
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
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        setQueryWeather( selectedCity );
    }

    return (
        <form onSubmit={ onSubmit } className="text-white d-flex justify-content-start align-items-end">
            <div style={{ position: 'relative' }}>
                <label htmlFor="city-input">Type to search...</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="city-input" 
                    placeholder="enter the city name..."                    
                    name="city"
                    autoComplete="off"
                    value={ inputValue }
                    onChange={ onChange }
                />
                <AutoCompleteResult cities={ cities } setSelectedCity={ setSelectedCity } />
            </div>
            <input type="submit" value="Search" className="btn btn-info mx-2" disabled={ disable } />

        </form>
    )
}

export default Form;
