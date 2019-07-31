import React from 'react';
import './autoCompleteResult.css';

const AutoCompleteResult = ( { cities, setSelectedCity } ) => {

    const onClick = e => {
        setSelectedCity( {
            city: e.target.dataset.city,
            country: e.target.dataset.country
        } );
    }

    return (
        <ul className="list-group">
            { cities.map( ( city, index ) => 
                <li key={ index } className="list-group-item" >
                    <a href="#!" onClick={ onClick } data-city={city.name} data-country={city.country} >{city.name}, {city.country}</a>
                </li>
                ) 
            }
        </ul>
    )
}


export default AutoCompleteResult;
