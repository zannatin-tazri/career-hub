import React from 'react';
import './Error404page.css'
import { Link } from 'react-router-dom';

const Error404page = () => {
    return (
        <div className='Error404page'>
             <h1>Oops!</h1>
             <h2>404</h2>
             <h2>Page not found !!!</h2>
             <p><Link to="/"> Back to home page</Link></p>
            
        </div>
    );
};

export default Error404page;