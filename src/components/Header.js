import React from 'react';
import { Navbar } from 'react-bootstrap'

const Header = ( { title } ) => {
    return (
        <Navbar expand="lg" className="bg-info m-0 p-0 header-navbar" fixed="top">
            <Navbar.Brand href="#home" className="h5 p-1 pr-4 m-0 text-white w-100 text-right navbar-brand">{ title }</Navbar.Brand>
        </Navbar>
    )
}

export default Header;
