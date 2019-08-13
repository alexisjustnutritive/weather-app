import React from 'react'
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="pt-5 pb-2 m-0 w-100 text-center" style={{ fontSize: '0.8rem' }}>
            <p className="bg-secondary text-white p-1 m-0 font-weight-bold">
                Weather App 2019 ReactJs
            </p>
            <p className="bg-secondary text-white p-1 m-0">
                *Cities autocomplete input are populate from https://github.com/lutangar/cities.json. Some cities are missing.
            </p>
        </footer>
)
}

export default Footer;
