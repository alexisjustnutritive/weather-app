import React from 'react'

const Weather = ( { weather } ) => {
    return (
        <div className="card">
            {/* <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap" /> */}
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
                </p>
                <a href="#!" className="btn">Go somewhere</a>
            </div>
        </div>
    )
}

export default Weather;