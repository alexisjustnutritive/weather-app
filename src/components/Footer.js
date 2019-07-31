import React from 'react'
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar fixed="bottom" className="bg-info m-0 p-0 footer-navbar">
            <Navbar.Brand href="#home" className="p p-1 pr-2 m-0 text-white w-100 text-center navbar-brand" style={{ fontSize: '0.8rem' }}>Weather App 2019 ReactJs</Navbar.Brand>
        </Navbar>
    )
}

export default Footer;
