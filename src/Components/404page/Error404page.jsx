import React from 'react';
import './Error404page.css'

const Error404page = () => {
    return (
        <div className='Error404page'>
             <h1>Oops!</h1>
             <h1>404</h1>
             <h2>Page not found !!!</h2>
             <h2><Link to="/home">Back to Home Page</Link> </h2>
        </div>
    );
};

export default Error404page;