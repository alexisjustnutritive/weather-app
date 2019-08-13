import React from 'react';

const Header = ( { title } ) => {
    return (
        <header className="mt-2">
            <h3 className="h5 p-1 m-0 w-100 text-center text-uppercase font-weight-bold">{ title }</h3>
        </header>
    )
}

export default Header;
