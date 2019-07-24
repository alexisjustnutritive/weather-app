import React, { useState } from 'react'

const Form = ( { getWeather } ) => {

    const [ form, setForm ] = useState( {
        city: '',
        country: ''
    } );

    const onSubmit = e => {
        e.preventDefault();
        getWeather( form );
    }

    const onChange = e => {
        setForm( {
            ...form,
            [e.target.name]: e.target.value
        } );
    }

    return (
        <form onSubmit={ onSubmit } className="text-white">
            <div className="form-group">
                <label htmlFor="city-input">City Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="city-input" 
                    placeholder="enter the city name..."
                    name="city"
                    onChange={ onChange }
                />
            </div>
            <div className="form-group">
                <label htmlFor="country-input">Country</label>
                <select 
                    className="form-control" 
                    id="country-input"
                    name="country"
                    onChange={ onChange }
                >
                    <option value="">--Select a country--</option>
                    <option value="us">United State of America</option>
                    <option value="ar">Argentina</option>
                    <option value="mx">Mexico</option>
                    <option value="co">Colombia</option>
                    <option value="gt">Guatemala</option>
                    <option value="cu">Cuba</option>
                </select>
            </div>
            <div className="form-group">
                <input type="submit" value="Search" className="btn btn-info" />
            </div>
            <h6> { form.city } </h6>
        </form>
    )
}

export default Form
