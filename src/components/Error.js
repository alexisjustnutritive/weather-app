import React from 'react'

const Error = ( { message } ) => {
    return (
        <h6 className=" p-2 text-white bg-danger ">
            { message }
        </h6>
    )
}

export default Error;
