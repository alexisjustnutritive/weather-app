import React from 'react';
import { Navbar } from 'react-bootstrap'

const Header = ( { title } ) => {
    return (
        <Navbar expand="lg" className="bg-info m-0 header-navbar">
            <Navbar.Brand href="#home" className="text-white w-100 text-center">{ title }</Navbar.Brand>
        </Navbar>
    )
}

export default Header;
